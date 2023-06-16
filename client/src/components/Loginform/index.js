import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: {
      email: formData.email,
      password: formData.password,
    },
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You can access the login user data from the `data` variable
      console.log('Logged in successfully:', data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
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
        <button type="submit" disabled={loading}>
          Log In
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};
export default LoginForm;






