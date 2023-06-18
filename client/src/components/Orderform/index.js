import React from 'react';
import { Container } from 'react-bootstrap';
import { QUERY_PRANK } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const OrderForm = () => {

      const { prankId } = useParams();
    
      const { loading, data } = useQuery(QUERY_PRANK, {
        variables: { prankId: prankId },
      });
    
      const viewPrank = data?.viewPrank|| {};
      console.log(data);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <Container style={{ textAlign: 'center'}}>
        <div>
          <form style={{margin: '100px'}} 
        //   onSubmit={handleSubmit}
          >
            <div>
              <label style={{margin: '115px' }} htmlFor="email">Prankee Name</label>
              <input style={{ border: 'solid black', width: '300px' }} 
                type="Prankee Name"
                id="Prankee Name"
                name="Prankee Name"
                // value={formData.email}
                // onChange={handleChange}
              />
            </div>
            <div style={{marginTop: '20px'}}  >
              <label style={{margin: '135px'}} htmlFor="password">Location</label>
              <input style={{ border: 'solid black', width: '300px' }} 
                type="Location"
                id="Location"
                name="Location"
                // value={formData.password}
                // onChange={handleChange}
              />
            </div>
            <div style={{marginTop: '20px'}}  >
              <label style={{margin: '125px'}} htmlFor="password">Date & Time</label>
              <input style={{ border: 'solid black', width: '300px' }} 
                type="Date & Time"
                id="Date & Time"
                name="Date & Time"
                // value={formData.password}
                // onChange={handleChange}
              />
            </div>
            <div>
            <h3 style={{fontSize: '30px', marginTop: '30px' }}>Prank Being Ordered</h3>
            <p>{viewPrank.title}</p>
            <p>Prank Price : ${viewPrank.price}.00</p>
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