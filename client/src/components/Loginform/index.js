import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Button, Card, Container, Row } from 'react-bootstrap';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });

      setFormData({
        email: '',
        password: '',
      });

      console.log('Logged in successfully:', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container style={{ margin: '100px 500px' }}>
        <Row>
          <Card style={{ width: '30rem', margin: '20px', display: 'block' }}>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title style={{ color: 'red', fontSize: '30px' }}>Login</Card.Title>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  style={{
                    border: 'solid black',
                    borderRadius: '1rem',
                    backgroundColor: 'lightGreen',
                    marginTop: '10px',
                  }}
                  variant="primary"
                  type="submit"
                  disabled={loading}
                >
                  Log In
                </Button>
                {error && <p>Error: {error.message}</p>}
              </form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
