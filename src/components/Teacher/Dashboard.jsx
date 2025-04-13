import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Dashboard.css";
import Header from './Header';
const dashboardItems = [
    { icon: "👤", label: "My Profile", link: "/profile" },
    { icon: "📝", label: "Assigned Projects", link: "/assigned-projects" },
    { icon: "💬", label: "Messages", link: "/messages" },
    { icon: "🎓", label: "My Students", link: "/students" },
    { icon: "✅", label: "Evaluate Submissions", link: "/evaluate-submissions" },
    { icon: "📄", label: "Certificate Requests", link: "/certificate-requests" },
    { icon: "📢", label: "Announcements", link: "/announcements" },
    { icon: "🗓️", label: "Schedule", link: "/calendar" },
    { icon: "📊", label: "Student Performance", link: "/performance" },
    { icon: "📚", label: "Teaching Resources", link: "/resources" },
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
