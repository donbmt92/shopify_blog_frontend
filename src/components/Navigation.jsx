import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: '🏠 Dashboard', icon: '🏠' },
    { path: '/blogs', label: '📚 Blog Management', icon: '📚' },
    { path: '/articles', label: '✏️ Article Editor', icon: '✏️' },
    { path: '/templates', label: '📝 Templates', icon: '📝' },
    { path: '/settings', label: '⚙️ Settings', icon: '⚙️' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>📝 Blog Manager</h2>
      </div>
      
      <div className="nav-menu">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </div>
      
      <div className="nav-footer">
        <div className="user-info">
          <div className="user-avatar">👤</div>
          <div className="user-details">
            <div className="user-name">Admin User</div>
            <div className="user-role">Blog Manager</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
