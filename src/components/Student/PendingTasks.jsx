import React from 'react';
import './PendingTasks.css'; // Importing the custom CSS file
import Header from './Header';
const PendingTasks = () => {
  // Sample tasks data for frontend display
  const tasks = [
    {
      id: 1,
      title: 'Complete UI Design for Dashboard',
      description: 'Design the main user interface for the project dashboard with all essential features.',
      dueDate: '2025-04-10',
    },
    {
      id: 2,
      title: 'Develop Backend API',
      description: 'Develop the backend APIs to fetch task data and update statuses.',
      dueDate: '2025-04-12',
    },
    {
      id: 3,
      title: 'Code Review for Module A',
      description: 'Review the code for Module A and suggest improvements.',
      dueDate: '2025-04-15',
    },
  ];

  return (
    <div>
      <Header/>
    <div className="app-container">
      

      <div className="main-content">
        
        <div className="header">
        <h1>Pending Tasks</h1>
      </div>
        

        <div className="content">
          {tasks.length === 0 ? (
            <p className="no-tasks">No pending tasks.</p>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className="task-card">
                  <div>
                    <h2 className="task-title">{task.title}</h2>
                    <p className="task-description">{task.description}</p>
                  </div>
                  <span className="task-due-date">{task.dueDate}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PendingTasks;
