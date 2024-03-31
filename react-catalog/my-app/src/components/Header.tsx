import './Header.css';
import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="nav-bar">
      <div className="nav-link">
        <Link to="/about" className="title">
          About
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/catalog" className="title">
          Catalog
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
