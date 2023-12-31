import React from 'react';
import { QUERY_PRANKS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Card, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from './images/prank.png';

const Prankgrid = () => {
  const { loading, data } = useQuery(QUERY_PRANKS);
  const Pranks = data?.viewPranks || [];
  console.log(data);

  return (
    <Container style={{ textAlign: 'center' }}>
      <Row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {loading ? (
          <div>Pranks have not yet been fetched!</div>
        ) : (
          Pranks.map((Prank, i) => (
            <Card
              key={i}
              style={{ width: '30rem', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <Card.Img
                variant="top"
                src={pic}
                style={{ maxHeight: '50vh', maxWidth: '70vh', objectFit: 'contain' }}
              />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title style={{ color: 'red', fontSize: '30px' }}>{Prank.title}</Card.Title>
                <Card.Text>{Prank.description}</Card.Text>
                <Card.Text style={{ color: 'blue' }}>Price: ${Prank.price}.00</Card.Text>
                <Link
                  style={{
                    border: 'solid black',
                    borderRadius: '1rem',
                    backgroundColor: 'lightBlue',
                    padding: '2px',
                  }}
                  variant="primary"
                  to={`/pranks/${Prank._id}`}
                >
                  Purchase Prank Code: {Prank._id}
                </Link>
              </Card.Body>
            </Card>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Prankgrid;
