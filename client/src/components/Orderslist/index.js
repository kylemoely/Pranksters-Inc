import {React} from 'react';
import { QUERY_USER_ORDERS, QUERY_PRANK } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Button, Card, Row, Container } from 'react-bootstrap';

const Orderslist = () => {
    const { loading: ordersLoading, error: ordersError, data: orderData } = useQuery(QUERY_USER_ORDERS, {
        variables: {}
    });
    const orders = data?.viewUserOrders || [];
    if(ordersError){
        return <div>Error: No orders found!</div>
    }

    return (
        <div>
            {ordersLoading ?
            <div> Loading...</div>
        : <div style={{ margin:'100px 500px'}}>
        {orders.map((order, i) => {
            const { prank } = order;
            const { data: prankData } = useQuery(QUERY_PRANK, {
                variables: { prank }
            })
            return (
        <Container fluid key={i}>
         <Row>
         <Card style={{ width: '30rem', margin: '20px', display:'block'}}>
            <Card.Body style={{ textAlign: 'center'}}>
            <Card.Title style={{color: 'red', fontSize: '30px' }} >Prank: {prankData.title}</Card.Title>
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

export default Orderslist;