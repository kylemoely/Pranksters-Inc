import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { email, password },
      });

      // Clear form inputs
      setEmail('');
      setPassword('');

      // Handle successful login, e.g., redirect to another page or update app state
      console.log('Logged in successfully:', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          Login
        </button>
        {error && <div>Error: {error.message}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
