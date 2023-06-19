import React from 'react';
import Orderslist from '../components/Orderslist';
import { QUERY_USER_ORDERS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Orders = () => {
  const { loading, data } = useQuery(QUERY_USER_ORDERS);
  const userOrders = data?.userOrders || [];

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Your Orders</h1>
        <div style={{ marginTop: '20px' }}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Orderslist userOrders={userOrders} title="User Orders" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Orders;
