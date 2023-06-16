import {React} from 'react';
import { QUERY_PRANKS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Button, Card, Row, Container } from 'react-bootstrap';
import pic from './images/prank.png'


const Prankgrid = () => {
    const { loading, data } = useQuery(QUERY_PRANKS);
    const Pranks = data?.viewPranks || [];
    console.log(data);
    
    
    return (
        <div>
            {loading ? 
            <div> Pranks have not yet been fetched! </div>
            : <div style={{ margin:'100px 500px'}}>
                {Pranks.map((Prank, i) => {
                    return (
                <Container fluid key={i}>
                 <Row>
                 <Card style={{ width: '30rem', margin: '20px', display:'block'}}>
                 <Card.Img variant="top" src={pic} style={{maxHeight:'50vh', maxWidth:'70vh'}}/>
                    <Card.Body style={{ textAlign: 'center'}}>
                    <Card.Title style={{color: 'red', fontSize: '30px' }} >{Prank.title}</Card.Title>
                    <Card.Text >{Prank.description}</Card.Text>
                    <Card.Text style={{color: 'blue' }}>Price: ${Prank.price}.00</Card.Text>
                    <Button style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightGreen' }} variant="primary" href="/pranks/{Prank._id}">Purchase Prank Code: {Prank._id}</Button>
                    </Card.Body>
                    </Card>
                    </Row>
                    </Container>
                    )
                    })}
               </div>
        }
        </div>
    )
}


export default Prankgrid;