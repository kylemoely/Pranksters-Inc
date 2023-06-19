import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Card, Row, Container, Button } from 'react-bootstrap';
import { QUERY_USER_ORDERS } from '../../utils/queries';
import { DELETE_ORDER } from '../../utils/mutations';

const Orderslist = () => {
  const { userId } = useParams();
  const { loading: ordersLoading, error: ordersError, data: orderData } = useQuery(QUERY_USER_ORDERS, {
    variables: { userId: userId },
  });
  const orders = orderData?.viewUserOrders || [];

  const [deleteOrder] = useMutation(DELETE_ORDER);

  if (ordersError) {
    return <div>Error: No orders found!</div>;
  }

  const handleEditOrder = (orderId) => {
    // Handle edit order logic
    console.log(`Edit Order: ${orderId}`);
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this order?');
    if (confirmDelete) {
      try {
        const { data } = await deleteOrder({
          variables: { orderId },
        });

        console.log(`Order deleted: ${data.deleteOrder._id}`);
        window.location.reload(); // Refresh the page after deletion
      } catch (error) {
        console.error('Error deleting order:', error);
      }
    }
  };

  if (ordersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container fluid>
        <Row>
          {orders.map((order, i) => {
            return (
              <Card key={i} style={{ width: '30rem', margin: '20px', display: 'block' }}>
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title style={{ color: 'red', fontSize: '30px' }}>Prank: {order.prank.title}</Card.Title>
                  <Card.Text>Prankee: {order.prankee}</Card.Text>
                  <Card.Text>Location: {order.location}</Card.Text>
                  <Card.Text>Time: {order.dateTime}</Card.Text>
                  <Button
                    style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightGreen' }}
                    variant="primary"
                    onClick={() => handleEditOrder(order._id)}
                  >
                    Edit Order
                  </Button>
                  <Button
                    style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightGreen' }}
                    variant="primary"
                    type="button" // Set button type to "button" instead of the default "submit"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Delete Order
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Orderslist;
