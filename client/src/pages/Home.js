import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS, QUERY_POSTS } from '../utils/queries';


const HomePage = () => {
  const { loading: usersLoading, error: usersError, data: userData } = useQuery(GET_USERS);
  const { loading: postsLoading, error: postsError, data: postData } = useQuery(GET_POSTS);

  if (usersLoading || postsLoading) {
    return <div>Loading...</div>;
  }

  if (usersError) {
    return <div>Error: {usersError.message}</div>;
  }

  if (postsError) {
    return <div>Error: {postsError.message}</div>;
  }

  const users = userData?.users || [];
  const posts = postData?.posts || [];

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
      
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>Post ID: {post.id}</h3>
          <p>Title: {post.title}</p>
          <p>Content: {post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
