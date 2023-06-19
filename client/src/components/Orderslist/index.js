import { React } from 'react';
import { QUERY_USER_ORDERS } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, Row, Container } from 'react-bootstrap';

const Orderslist = () => {
    const { userId } = useParams();
    const { loading: ordersLoading, error: ordersError, data: orderData } = useQuery(QUERY_USER_ORDERS, {
        variables: { userId: userId }
    });
    const orders = orderData?.viewUserOrders || [];
    if(ordersError){
        return <div>Error: No orders found!</div>
    }

    return (
        <div>
            {ordersLoading ?
            <div> Loading...</div>
        : <div style={{ margin:'100px 500px'}}>
        {orders.map((order, i) => {
            return (
        <Container fluid key={i}>
         <Row>
         <Card style={{ width: '30rem', margin: '20px', display:'block'}}>
            <Card.Body style={{ textAlign: 'center'}}>
            <Card.Title style={{color: 'red', fontSize: '30px' }} >Prank: {order.prank}</Card.Title>
            <Card.Text >Prankee: {order.prankee}</Card.Text>
            <Card.Text >Location: {order.location}</Card.Text>
            <Card.Text >Time: {order.dateTime}</Card.Text>
            <Button style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightGreen' }} variant="primary">Edit Order</Button>
            <Button style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightGreen' }} variant="primary">Delete Order</Button>
            </Card.Body>
            </Card>
            </Row>
            </Container>
            )
            })}
       </div>}
        </div>
    )

};

// const Orderslist = () => {
//   const { userId } = useParams();
//   const { loading, data } = useQuery(QUERY_USER_ORDERS, {
//     variables: { userId: userId },
//   });

//   const viewOrders = data?.viewOrders || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (

//     <Container style={{ textAlign: 'center' }}>
//       {/* <Row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {loading ? (
//           <div>Your orders have not yet been fetched!</div>
//         ) : (
//           viewOrders.map((viewOrders, i) => (
//             <Card
//               key={i}
//               style={{ width: '30rem', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//             >

//               <Card.Body style={{ textAlign: 'center' }}>
//                 <Card.Title style={{ color: 'red', fontSize: '30px' }}>{viewOrders.dateTime}</Card.Title>
//                 <Card.Text>{viewOrders.location}</Card.Text>
//                 <Card.Text style={{ color: 'blue' }}>Price: ${viewOrders.prank}.00</Card.Text>

//               </Card.Body>
//             </Card>
//           ))
//         )}
//       </Row> */}
//       <div>
            
//             <p>{viewOrders.dateTime}</p>
//             <p style={{ color: 'blue' }}> {viewOrders.location}</p>
//             <p> {viewOrders.prank}</p>
//           </div>

//     </Container>
//   );

// }

export default Orderslist;