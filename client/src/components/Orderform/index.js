import React from 'react';
import { Container } from 'react-bootstrap';
import { QUERY_PRANK } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const { prankId } = useParams();
  const navigate = useNavigate();

  const { loading, data } = useQuery(QUERY_PRANK, {
    variables: { prankId: prankId },
  });

  const viewPrank = data?.viewPrank || {};
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation or processing here
    // Redirect the user to the Stripe checkout page
    // You can replace the "YOUR_CHECKOUT_URL" with the actual URL of your Stripe checkout page
    navigate('/orders');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ textAlign: 'center' }}>
      <div>
        <form style={{ margin: '100px' }} onSubmit={handleSubmit}>
          <div>
            <label style={{ margin: '115px' }} htmlFor="email">
              Prankee Name
            </label>
            <input
              style={{ border: 'solid black', width: '300px' }}
              type="text"
              id="Prankee Name"
              name="Prankee Name"
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <label style={{ margin: '135px' }} htmlFor="password">
              Location
            </label>
            <input
              style={{ border: 'solid black', width: '300px' }}
              type="text"
              id="Location"
              name="Location"
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <label style={{ margin: '125px' }} htmlFor="password">
              Date & Time
            </label>
            <input
              style={{ border: 'solid black', width: '300px' }}
              type="text"
              id="Date & Time"
              name="Date & Time"
            />
          </div>
          <div>
            <h3 style={{ fontSize: '30px', marginTop: '30px' }}>
              Prank Being Ordered
            </h3>
            <p>{viewPrank.title}</p>
            <p>Prank Price: ${viewPrank.price}.00</p>
          </div>
          <button
            style={{
              marginTop: '30px',
              backgroundColor: 'lightBlue',
              border: 'solid black',
              borderRadius: '1rem',
              padding: '10px',
              marginLeft: '30px',
            }}
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default OrderForm;
