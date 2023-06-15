import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
      });
      // Handle user data returned from the server
      console.log(data.addUser);
    } catch (error) {
      console.log(error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div>
      <h1>Signup</h1>  
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="username" className="col-form-label">Username</label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="email" className="col-form-label">Email</label>
          </div>
          <div className="col-auto">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="password" className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <span className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        <button type="submit" disabled={loading} className="btn btn-primary">
          Sign Up
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default Signup;
