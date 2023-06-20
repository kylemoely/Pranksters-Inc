import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Card, Row, Container, Button, Form } from 'react-bootstrap';
import { QUERY_USER_ORDERS } from '../../utils/queries';
import { DELETE_ORDER, UPDATE_ORDER } from '../../utils/mutations';

const Orderslist = () => {
  const { userId } = useParams();
  const { loading: ordersLoading, error: ordersError, data: orderData } = useQuery(QUERY_USER_ORDERS, {
    variables: { userId: userId },
  });
  const orders = orderData?.viewUserOrders || [];

  const [updateOrder] = useMutation(UPDATE_ORDER);
  const [deleteOrder] = useMutation(DELETE_ORDER);

  const [editedOrder, setEditedOrder] = useState({
    prankee: '',
    location: '',
    dateTime: '',
  });

  if (ordersError) {
    return <div>Error: No orders found!</div>;
  }

  const handleEditOrder = (order) => {
    setEditedOrder(order);
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

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    const updatedOrder = {
      ...editedOrder,
      prankee: editedOrder.prankee,
      dateTime: editedOrder.dateTime,
      location: editedOrder.location,
    };

    const confirmSave = window.confirm('Are you sure you want to save the changes?');
    if (!confirmSave) {
      return updatedOrder;
    }

    try {
      const { data } = await updateOrder({
        variables: { orderId: updatedOrder._id, location: updatedOrder.location, dateTime: updatedOrder.dateTime, prankee: updatedOrder.prankee },
      });

      console.log(`Order updated: ${data.updateOrder._id}`);

      const updatedOrderIndex = orders.findIndex((order) => order._id === updatedOrder._id);

      const updatedOrders = [...orders];
      updatedOrders[updatedOrderIndex] = data.updateOrder;

      setEditedOrder();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleEditInputChange = (field, value) => {
    setEditedOrder((prevOrder) => ({
      ...prevOrder,
      [field]: value,
    }));
  };

  const handleCancelEdit = () => {
    setEditedOrder(null);
  };

  if (ordersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container fluid>
        <Row>
          {orders.map((order, i) => {
            const isEditing = editedOrder && editedOrder._id === order._id;

            return (
              <Card key={i} style={{ width: '30rem', margin: '20px', display: 'block' }}>
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title style={{ color: 'red', fontSize: '30px' }}>Prank: {order.prank.title}</Card.Title>
                  {isEditing ? (
                    <Form onSubmit={(e) => handleSaveChanges(e)}>
                      {/* Display editable form fields */}
                      <Form.Group controlId="formPrankee" style={{ marginTop: '20px' }}>
                        <Form.Label style={{ margin: '50px' }}>Prankee :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter prankee name"
                          value={editedOrder.prankee}
                          onChange={(e) => handleEditInputChange('prankee', e.target.value)}
                          style={{ border: 'solid black', width: '200px' }}
                        />
                      </Form.Group>
                      <Form.Group controlId="formDateTime" style={{ marginTop: '20px' }}>
                        <Form.Label style={{ margin: '30px' }}>Time and Date :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter time and date"
                          value={editedOrder.dateTime}
                          onChange={(e) => handleEditInputChange('dateTime', e.target.value)}
                          style={{ border: 'solid black', width: '200px' }}
                        />
                      </Form.Group>
                      <Form.Group controlId="formLocation" style={{ marginTop: '20px' }}>
                        <Form.Label style={{ margin: '50px' }}>Location :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter location"
                          value={editedOrder.location}
                          onChange={(e) => handleEditInputChange('location', e.target.value)}
                          style={{ border: 'solid black', width: '200px' }}
                        />
                      </Form.Group>
                      <Button
                        style={{
                          border: 'solid black',
                          borderRadius: '1rem',
                          backgroundColor: 'lightBlue',
                          marginRight: '10px',
                          padding: '5px',
                          marginTop: '30px'
                        }}
                        variant="primary"
                        type="submit"
                      >
                        Save
                      </Button>
                      <Button
                        style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightBlue', padding: '5px', marginTop: '30px' }}
                        variant="primary"
                        onClick={() => handleCancelEdit()}
                      >
                        Cancel
                      </Button>
                    </Form>
                  ) : (
                    <>
                      {/* Display order information */}
                      <Card.Text>Prankee: {order.prankee}</Card.Text>
                      <Card.Text>Time: {order.dateTime}</Card.Text>
                      <Card.Text>Location: {order.location}</Card.Text>
                      <Button
                        style={{
                          border: 'solid black',
                          borderRadius: '1rem',
                          backgroundColor: 'lightGreen',
                          marginRight: '10px',
                        }}
                        variant="primary"
                        onClick={() => handleEditOrder(order)}
                      >
                        Edit Order
                      </Button>
                      <Button
                        style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightGreen' }}
                        variant="primary"
                        type="button"
                        onClick={() => handleDeleteOrder(order._id)}
                      >
                        Delete Order
                      </Button>
                    </>
                  )}
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
