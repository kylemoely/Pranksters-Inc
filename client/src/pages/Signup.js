import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { VIEW_USER } from '../utils/mutations';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [viewUser, { loading, error }] = useMutation(VIEW_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await viewUser({
        variables: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
      });
      // Handle user data returned from the server
      console.log(data.viewUser);
    } catch (error) {
      console.log(error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
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
          Sign Up
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default Signup;
