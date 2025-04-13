import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Dashboard.css";
import Header from './Header';
const dashboardItems = [
    { icon: "👥", label: "My Profile", link: "/profile" },
    { icon: "📚", label: "My Tasks", link: "/tasks", completed: true },
    { icon: "💬", label: "Chat", link: "/chating" },
    { icon: "🧑‍💼", label: "Pending Tasks", link: "/pendingtasks", completed: true },
    { icon: "✅", label: "Completed Tasks", link: "/completed-tasks" },
    { icon: "🤝", label: "Team", link: "/certificates" },
    { icon: "📄", label: "Certificates", link: "/certificates" },
    { icon: "📣", label: "Announcements", link: "/announcements" },
    { icon: "🗓️", label: "Calendar", link: "/calendar" }, // Internship schedule or important dates
    { icon: "📈", label: "Performance", link: "/performance" }, // Track internship performance
    { icon: "👨‍💻", label: "Projects", link: "/projects" }, // Ongoing or completed projects
    { icon: "🛠️", label: "Resources", link: "/resources" }, // Tutorials or materials
  ];
  

export default function Dashboard() {
  return (
    <div>
      <Header/>
    
    <div className="main-content">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <span className="dashboard-title">My Dashboard</span>
          <span className="dashboard-info">
            <strong>TN01B01WD01 (BATCH-I)</strong> - Internship In Web Development
          </span>
        </div>
        <div className="dashboard-grid">
          {dashboardItems.map((item, index) => (
            <Link to={item.link} key={index} className="dashboard-link">  {/* Wrap items with Link */}
              <div className="dashboard-card">
                <div className="dashboard-icon">
                  <span>{item.icon}</span>
                  {item.completed && <span className="checkmark">✔️</span>}
                </div>
                <div className="dashboard-label">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
