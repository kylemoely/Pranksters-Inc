import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from '../utils/queries';

const OrderPage = () => {
  const { loading, error, data } = useQuery(QUERY_ORDERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const orders = data?.viewOrder || [];

  return (
    <div>
      <h1>Order Page</h1>

      {orders.map((order) => (
        <div key={order._id}>
          <h3>Order ID: {order._id}</h3>
          <p>Date and Time: {order.dateTime}</p>
          <p>Location: {order.location}</p>
          <p>Prank ID: {order.prank._id}</p>
          <p>Prankee: {order.prankee}</p>
          <p>User ID: {order.user._id}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
