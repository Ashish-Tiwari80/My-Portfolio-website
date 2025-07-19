import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min'; // for toggle functionality
import './App.css'; // Custom CSS for styling sidebar (provided below)

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/', style: "bi bi-house navicon"},
    { name: 'About', path: '/about', style: "bi bi-person"},
    { name: 'Resume', path: '/resume', style: "bi bi-file-earmark-text"},
    { name: 'Contact', path: '/contact', style: "bi bi-envelope"}
  ];
  return (
    <div className="header">
      {/* ✅ Horizontal Navbar - Visible on small to large screens (<1200px) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-xl-none">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Ashish's Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link 
                  to={item.path}
                  className={`nav-link text-white ${location.pathname === item.path ? 'active fw-bold text-info' : ''}`}>
                {item.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Vertical Sidebar - Visible on extra large screens (≥1200px) */}
      <div className="d-none d-xl-block">
        <div className="sidebar text-white p-4">
          <h4 className="text-center">Aashish</h4>
          <div class="social-links text-center">
            <a href="https://x.com/AshishT61164097?t=inA1_MQnI2HOqX7ijVt6vg&s=09" class="twitter"><i class="bi bi-twitter-x" style={{color: "white"}}></i></a>
            <a href="https://github.com/Ashish-Tiwari80" class="github"><i class="bi bi-github" style={{color: "white"}}/></a>
            <a href="https://www.instagram.com/aashish._.tiwari?igsh=ZjR6c3lvcW1xejl2" class="instagram"><i class="bi bi-instagram" style={{color: "white"}}></i></a>
            <a href="https://www.linkedin.com/in/aashish-tiwari-6a539b336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="linkedin"><i class="bi bi-linkedin" style={{color: "white"}}></i></a>
          </div>
          <ul className="nav flex-column mt-4">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link 
                  to={item.path}
                  className={`nav-link text-white ${location.pathname === item.path ? 'active fw-bold text-info' : ''}`}>
                <i className={item.style}></i>{item.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;