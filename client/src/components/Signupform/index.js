import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { Button, Container } from 'react-bootstrap';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [signupUser, { loading, error }] = useMutation(ADD_USER);

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      <div>
        <form style={{ margin: '150px' }} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <br />
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
            <label htmlFor="email">Email</label>
            <br />
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
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ border: 'solid black', width: '200px' }}
            />
          </div>
          <Button type="submit" disabled={loading}>
            Sign Up
          </Button>
          {error && <p>Error: {error.message}</p>}
        </form>
      </div>
    </Container>
  );
};

export default SignupForm;
