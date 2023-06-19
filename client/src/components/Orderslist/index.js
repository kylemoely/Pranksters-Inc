import React from 'react';
import { QUERY_USER_ORDERS } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, Row, Container } from 'react-bootstrap';

const Orderslist = () => {
  const { userId } = useParams();
  const { loading: ordersLoading, error: ordersError, data: orderData } = useQuery(QUERY_USER_ORDERS, {
    variables: { userId: userId },
  });
  const orders = orderData?.viewUserOrders || [];

  if (ordersError) {
    return <div>Error: No orders found!</div>;
  }

  return (
    <div>
      {ordersLoading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ margin: '100px 500px' }}>
          {orders.map((order, i) => {
            return (
              <Container fluid key={i}>
                <Row>
                  <Card style={{ width: '30rem', margin: '20px', display: 'block' }}>
                    <Card.Body style={{ textAlign: 'center' }}>
                      <Card.Title style={{ color: 'red', fontSize: '30px' }}>Prank: {order.prank.title}</Card.Title>
                      <Card.Text>Prankee: {order.prankee}</Card.Text>
                      <Card.Text>Location: {order.location}</Card.Text>
                      <Card.Text>Time: {order.dateTime}</Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orderslist;
