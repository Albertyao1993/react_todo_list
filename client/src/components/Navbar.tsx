import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Todo App</Link>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/todos' ? 'active' : ''}>
          <Link to="/todos">Todos</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 