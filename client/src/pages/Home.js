import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_PRANKS } from '../utils/queries';

const HomePage = () => {
  const { loading: usersLoading, error: usersError, data: userData } = useQuery(QUERY_USER);
  const { loading: pranksLoading, error: pranksError, data: pranksData } = useQuery(QUERY_PRANKS);

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
  const pranks = pranksData?.pranks || [];

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
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {pranks.map((prank) => (
          <div className="col" key={prank.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{prank.title}</h5>
                <p className="card-text">{prank.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
