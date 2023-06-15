import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_PRANKS} from '../utils/queries'; // Update the import statements

const Home = () => {
  const { loading: usersLoading, error: usersError, data: userData } = useQuery(QUERY_USER); // Update the constant name
  const { loading: pranksLoading, error: pranksError, data: prankData } = useQuery(QUERY_PRANKS); // Update the constant name

  if (usersLoading || pranksLoading) {
    return <div>Loading...</div>;
  }

  if (usersError) {
    return <div>Error: {usersError.message}</div>;
  }

  if (pranksError) {
    return <div>Error: {pranksError.message}</div>;
  }

  const users = userData?.users || [];
  const pranks = prankData?.pranks || [];

  return (
    <div>
      <h1>Home Page</h1>
      
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>User ID: {user.id}</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
      
      <h2>Pranks</h2>
      {pranks.map((prank) => (
        <div key={prank.id}>
          <h3>Post ID: {prank.id}</h3>
          <p>Title: {prank.title}</p>
          <p>Content: {prank.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
