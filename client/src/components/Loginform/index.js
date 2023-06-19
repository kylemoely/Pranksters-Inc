import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { loading, data } = useQuery(QUERY_USER, {
    variables: {
      email: formData.email,
      password: formData.password,
    },
  });

  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You can access the login user data from the `data` variable
      console.log('Logged in successfully:', data);

      navigate('/pranks');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container style={{ textAlign: 'center'}}>
    <div>
      <form style={{margin: '150px' }} onSubmit={handleSubmit}>
        <div>
          <label style={{margin: '150px' }} htmlFor="email">Email :</label>
          <input style={{ border: 'solid black', width: '200px' }} 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div style={{marginTop: '20px'}}  >
          <label style={{margin: '135px'}} htmlFor="password">Password :</label>
          <input style={{ border: 'solid black', width: '200px' }} 
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button style={{marginTop: '30px',  backgroundColor: 'lightBlue', border: 'solid black', borderRadius: '1rem', padding: '10px', marginLeft: '30px'}} type="submit" disabled={loading}>
          Browse Pranks
        </button>
        {/* {error && <p style={{marginTop: '30px'}}>Error: {error.message}</p>} */}
      </form>
    </div>
    </Container>
  );
};
export default LoginForm;






