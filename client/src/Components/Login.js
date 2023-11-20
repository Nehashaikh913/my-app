// Login.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/todos";

const Login = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = userId ? `${baseURL}?userId=${userId}` : baseURL;
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
  }, [userId]);

  return (
    <div>
      <label>User ID:</label>
      <span>{userId}</span>

      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Login;
