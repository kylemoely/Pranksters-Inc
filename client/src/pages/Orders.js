import {React} from 'react';
import Orderslist from '../components/Orderslist';
import { QUERY_USER_ORDERS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Orders = () => {
    const { loading, data } = useQuery(QUERY_USER_ORDERS);
    const userOrders = data?.userOrders || [];
    
    return (
      <main>
        <div className="flex-row justify-center">
          <div>
          <h1 style={{marginLeft: '600px', fontSize: '50px' }}>Your Orders</h1>
          </div>
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Orderslist 
                userOrders={userOrders}
                title="User Orders"
              />
            )}
          </div>
        </div>
      </main>
    );

};

export default Orders;