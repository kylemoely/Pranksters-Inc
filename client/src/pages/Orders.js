import React from 'react';
import { QUERY_USER_ORDERS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Orderslist from '../components/Orderslist';

const Orders = () => {
  const { loading, error, data } = useQuery(QUERY_USER_ORDERS, {
    variables: {},
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Orders</h1>
      <Orderslist orders={data.viewUserOrders} />
    </div>
  );
};

export default Orders;
