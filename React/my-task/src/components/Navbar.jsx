import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/add">Add Task</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}