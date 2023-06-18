import React from 'react';
import { QUERY_PRANK } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Button, Card, Row, Container } from 'react-bootstrap';

const Orderslist = ({ orders }) => {
  return (
    <div>
      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        <div style={{ margin: '100px 500px' }}>
          {orders.map((order, i) => (
            <OrderItem key={i} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

const OrderItem = ({ order }) => {
  const { prank } = order;
  const { loading, error, data } = useQuery(QUERY_PRANK, {
    variables: { prank },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const prankData = data.viewPrank;

  return (
    <Container fluid>
      <Row>
        <Card style={{ width: '30rem', margin: '20px', display: 'block' }}>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title style={{ color: 'red', fontSize: '30px' }}>Prank: {prankData.title}</Card.Title>
            <Card.Text>Prankee: {order.prankee}</Card.Text>
            <Card.Text>Location: {order.location}</Card.Text>
            <Card.Text>Time: {order.dateTime}</Card.Text>
            <Button style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightGreen' }} variant="primary">
              Edit Order
            </Button>
            <Button style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightGreen' }} variant="primary">
              Delete Order
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Orderslist;
