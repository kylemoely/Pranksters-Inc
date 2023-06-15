import {React} from 'react';
import { QUERY_PRANKS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Button, Card, Row, Container } from 'react-bootstrap';
import pic from './images/prank.png'


const Prankgrid = () => {
    const { loading, data } = useQuery(QUERY_PRANKS);
    const Pranks = data?.viewPrank || [];
    console.log(data);
    
    
    return (
        <div>
            {loading ? 
            <div> Pranks have not yet been fetched yet! </div>
            : <div style={{ margin:'100px 500px'}}>
                {Pranks.map(Prank => {
                    return (
                <Container fluid >
                 <Row col-md-6 >
                 <Card style={{ width: '30rem', margin: '20px', display:'block'}}>
                 <Card.Img variant="top" src={pic} style={{maxHeight:'50vh', maxWidth:'70vh'}}/>
                    <Card.Body>
                    <Card.Title style={{ textAlign: 'center'}}>{Prank.title}</Card.Title>
                    <Card.Text style={{ textAlign: 'center'}}>{Prank.description}</Card.Text>
                    <Card.Text style={{ textAlign: 'center', color: 'blue' }}>Price: ${Prank.price}.00</Card.Text>
            
                <Button variant="primary" href="" style={{ textAlign: 'center'}}>
            Purchase</Button>
            
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