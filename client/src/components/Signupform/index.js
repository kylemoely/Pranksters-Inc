import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [signupUser, { loading }] = useMutation(ADD_USER);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signupUser({
        variables: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
      });

      setFormData({
        username: '',
        email: '',
        password: '',
      });

      console.log('Signed up successfully:', data);

      // Redirect to the pranks page
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      <div>
        <form style={{ margin: '150px' }} onSubmit={handleSubmit}>
          <div>
            <label style={{ margin: '120px' }} htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ border: 'solid black', width: '200px' }}
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <label style={{ margin: '135px' }} htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ border: 'solid black', width: '200px' }}
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <label style={{ margin: '120px' }} htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ border: 'solid black', width: '200px' }}
            />
          </div>
          <Button
            style={{
              marginTop: '30px',
              backgroundColor: 'lightBlue',
              border: 'solid black',
              borderRadius: '1rem',
              padding: '10px',
            }}
            type="submit"
            disabled={loading}
          >
            Sign Up
          </Button>
          {/* {error && <Alert variant="danger">Error: {error.message}</Alert>} */}
        </form>
      </div>
    </Container>
  );
};

export default SignupForm;
