import React from 'react';
import { useQuery } from '@apollo/client';
import { VIEW_ORDERS } from '../utils/queries'; 

const OrdersList = () => {
  
    const { loading, data } = useQuery(VIEW_ORDERS); 
  if (loading) {
    return <div>Loading...</div>;
  }

  const orders = data?.orders || [];

  return (
    <div>
      <h1>Orders List</h1>
      {orders.length === 0 ? (
        <div>No orders available</div>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>{order.name}</li> // Replace 'name' with the relevant property of your order object
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersList;
