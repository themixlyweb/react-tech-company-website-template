/**CORE LIBRARY IMPORTS */
import { React ,useState, useRef, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
   const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const links = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Company", path: "/company"},
    { name: "Blog", path: "/blog" },
    { name: "Get a Quote", path: "/contact-us", isButton: true },
  ];

  return (
    <>
      {/* Spacer */}
      <div style={{ paddingTop: isSticky ? navbarRef.current?.offsetHeight : 0 }} />

      {/* Navbar */}
      <motion.nav
        ref={navbarRef}
        className={`navbar ${isSticky ? "navbar-fixed" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="nav-container">
          {/* Logo */}
          <h1 className="nav-logo"><Link to='/'>DigiCore</Link></h1>

          {/* Desktop Links */}
        <ul className="nav-links">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className={`${link.isButton ? "btn-cta btn-home" : ""} ${
              location.pathname === link.path ? "active" : ""
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="sidebar-header">
              <h1 className="nav-logo">DigiCore</h1>
              <button onClick={() => setSidebarOpen(false)} className="close-btn">✕</button>
            </div>
            <ul className="sidebar-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/company">Company</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact-us">Get a Quote</a></li>
            </ul>
            <div className="sidebar-footer">
              <p>Contact: info@digicore.com</p>
              <p>Phone: +91 63576 05131</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
