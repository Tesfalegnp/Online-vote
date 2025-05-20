import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="text-white text-center p-5">
      <h1>Welcome to Online Voting</h1>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/vote" className="btn btn-primary">Vote Now</Link>
        <Link to="/login" className="btn btn-outline-light">Sign In</Link>
      </div>
    </div>
  );
}

export default Welcome;