import React from 'react';
import { Button } from 'react-bootstrap';


const HomePage = () => {

  return (
    <div style={{ textAlign: 'center', margin:'200px'}}>

      <Button style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightBlue', marginLeft:'120px', fontSize:'60px', padding:'10px' }} variant="primary" href="/login">Login</Button>
      

      <Button style={{ border: 'solid black', borderRadius: '1rem', backgroundColor: 'lightBlue', fontSize:'60px', padding:'10px', marginLeft:'100px' }} variant="primary" href="/signup">SignUp</Button>
      
    </div>
  );
};

export default HomePage;