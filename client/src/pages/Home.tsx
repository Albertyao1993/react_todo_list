import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [message] = useState<string>('Welcome to Todo App');

  return (
    <div className="home-container">
      <h1>{message}</h1>
      <p>This is a Todo application built with React, TypeScript, Axios and React Router</p>
      <div className="home-actions">
        <Link to="/todos" className="btn btn-primary">
          View Todo List
        </Link>
      </div>
    </div>
  );
};

export default Home; 