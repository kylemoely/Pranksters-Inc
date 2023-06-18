import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { QUERY_PRANK } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../utils/mutations';
import { QUERY_USER_ORDERS } from '../../utils/queries';

const OrderForm = () => {
  const [formData, setFormState] = useState({
    prankee: '',
    location: '',
    dateTime: '',
  });

  const [addOrder, { error }] = useMutation(ADD_ORDER, {
    update(cache, { data: { addOrder } }) {
      try {
        const { viewUserOrders } = cache.readQuery({ query: QUERY_USER_ORDERS });

        cache.writeQuery({
          query: QUERY_USER_ORDERS,
          data: { viewUserOrders: [addOrder, ...viewUserOrders] },
        });
      } catch (e) {
        console.error(error)
      }
    },
  })
      const { prankId } = useParams();
    
      const { loading, data } = useQuery(QUERY_PRANK, {
        variables: { prankId: prankId },
      });
    
      const viewPrank = data?.viewPrank|| {};
      

      const handleFormSubmit = async (e) => {
        e.preventDefault();
    try {
      const { data } = await addOrder({
        variables: {
          username: formData.prankee,
          email: formData.location,
          password: formData.dateTime,
        },
      });
    
          setFormState({
            prankee: '',
            location: '',
            dateTime: '',
          });
          console.log('Order Submited');
        } catch (err) {
          console.log(err);
        }
      };

      const handleChange = (e) => {
        setFormState({ ...formData, [e.target.name]: e.target.value });
      };
    
      if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <Container style={{ textAlign: 'center'}}>
        <div>
          <form style={{margin: '100px'}} 
          onSubmit={handleFormSubmit}
          >
            <div>
              <label style={{margin: '115px' }} htmlFor="email">Prankee Name</label>
              <input
              type="prankee"
              id="prankee"
              name="prankee"
              value={formData.prankee}
              onChange={handleChange}
              style={{ border: 'solid black', width: '200px' }}
            />
            </div>
            <div style={{marginTop: '20px'}}  >
              <label style={{margin: '135px'}} htmlFor="password">Location</label>
              <input
              type="location"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={{ border: 'solid black', width: '200px' }}
            />
            </div>
            <div style={{marginTop: '20px'}}  >
              <label style={{margin: '125px'}} htmlFor="password">Date & Time</label>
              <input
              type="dateTime"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              style={{ border: 'solid black', width: '200px' }}
            />
            </div>
            <div>
            <h3 style={{fontSize: '30px', marginTop: '30px' }}>Prank Being Ordered</h3>
            <p>{viewPrank.title}</p>
            <p style={{color: 'blue' }}>Prank Price : ${viewPrank.price}.00</p>
            <p>Prank Code : {viewPrank._id}</p>
            </div>
            <button style={{marginTop: '30px',  backgroundColor: 'lightBlue', border: 'solid black', borderRadius: '1rem', padding: '10px', marginLeft: '30px'}} type="submit" 
            disabled={loading}
            >
              Submit
            </button>
            {/* {error && <p style={{marginTop: '20px'}}>Error: {error.message}</p>} */}
          </form>
        </div>
        </Container>
      )
    
};
export default OrderForm;