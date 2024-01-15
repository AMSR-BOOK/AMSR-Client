import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/search">Search</Link>
      <Link to="/feed">Feed</Link>
      <Link to="/mybooks">My</Link>
    </div>
  );
}
