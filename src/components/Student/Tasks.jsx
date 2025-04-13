import React, { useState } from 'react';
import './Tasks.css'; // Import your CSS file here
import Header from './Header';
const initialTasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is the first task description.",
    pdfUrl: "/path-to-pdf/task1.pdf",
    generatedDate: "2025-04-06",
    dueDate: "2025-04-10",
    status: "Pending",
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is the second task description.",
    pdfUrl: "/path-to-pdf/task2.pdf",
    generatedDate: "2025-04-06",
    dueDate: "2025-04-12",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is the third task description.",
    pdfUrl: "/path-to-pdf/task3.pdf",
    generatedDate: "2025-04-06",
    dueDate: "2025-04-15",
    status: "Complete",
  },
];

const MyTaskPage = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    pdfUrl: '',
    githubLink: '',
    linkedinLink: '',
    rarFile: null,
  });

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewTask({ ...newTask, rarFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskId = tasks.length + 1;
    const taskToAdd = {
      id: newTaskId,
      ...newTask,
      generatedDate: new Date().toISOString().split('T')[0],
      dueDate: "2025-04-20", // You can dynamically set this based on input or logic
      status: "Pending",
    };
    setTasks([...tasks, taskToAdd]);
    setShowForm(false);
    setNewTask({
      title: '',
      description: '',
      pdfUrl: '',
      githubLink: '',
      linkedinLink: '',
      rarFile: null,
    });
  };

  return (
    <div>
      <Header/>
    <div className="main-content">
      <div className="header">
        <h1>My Tasks</h1>
        <button className="upload-btn" onClick={() => setShowForm(true)}>Task Upload</button>
      </div>

      {showForm && (
        <div className="task-form">
          <h2>Upload New Task</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Task Title:</label>
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>GitHub Link:</label>
              <input
                type="url"
                name="githubLink"
                value={newTask.githubLink}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>LinkedIn Link:</label>
              <input
                type="url"
                name="linkedinLink"
                value={newTask.linkedinLink}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Upload RAR File:</label>
              <input
                type="file"
                accept=".zip"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}

      {tasks.map(task => (
        <div key={task.id} className="task-container">
          <h2>{task.title}</h2>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Task Generated Date:</strong> {task.generatedDate}</p>
          <p><strong>Due Date:</strong> {task.dueDate}</p>

          <div>
            <strong>Status:</strong>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>

          <div>
            <a href={task.pdfUrl} download>Download PDF</a>
          </div>

          <h4>Task Table:</h4>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyTaskPage;
