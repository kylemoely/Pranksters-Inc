import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'; // Update the import statement

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [signupUser, { loading, error }] = useMutation(ADD_USER); // Update the constant name

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

      // Clear form inputs
      setFormData({
        username: '',
        email: '',
        password: '',
      });

      // Handle successful signup, e.g., redirect to login page or show success message
      console.log('Signed up successfully:', data);
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

export default SignupForm;
