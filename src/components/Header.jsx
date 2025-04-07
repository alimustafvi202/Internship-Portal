import "./Header.css";
import logo from "../assets/logo new.png";
import Profile from "../assets/profile.jpeg";
import {
  MdDashboard, MdPerson, MdAssignment,
  MdGroup, MdChat, MdSettings, MdLogout,
  MdMenu, 
  MdNotificationsActive,
} from "react-icons/md";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar visibility
  function toggleSidebar() {
    setIsOpen(prevState => !prevState); // Toggle the sidebar state
  }

  return (
    <>
      {/* Only show the hamburger button if the sidebar is closed */}
      {!isOpen && (
        <button className="hamburger" onClick={toggleSidebar}>
          <MdMenu />
        </button>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <img src={logo} alt="Technik Nest Logo" />
        <a href="/"><MdDashboard className="icon" /> Dashboard</a>
        <a href="/profile"><MdPerson className="icon" /> Profile</a>
        <a href="/tasks"><MdAssignment className="icon" /> My Task</a>
        <a href="#"><MdGroup className="icon" /> Team</a>
        <a href="/chating"><MdChat className="icon" /> Chat</a>
        <a href="#"><MdSettings className="icon" /> Setting</a>
        <a href="#"><MdLogout className="icon" /> Logout</a>
      </aside>

      <nav className="topnav">
        <h1>Welcome Muhammad Ali</h1>

        <div className="nav-right">
          <MdNotificationsActive className="notification-icon" />
          <img src={Profile} alt="User" className="user-img" />
        </div>
      </nav>
    </>
  );
}

export default Header;
