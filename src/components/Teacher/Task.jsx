import React, { useState } from "react";
import "./Task.css";
import { FaRegFilePdf, FaUserGraduate, FaCalendarAlt, FaFileAlt, FaHeading } from "react-icons/fa";
import Header from './Header';
export default function Task() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    deadline: "",
    student: "",
    file: null,
  });

  const students = [
    "Student A",
    "Student B",
    "Student C",
    "Student D",
  ]; // Replace with backend data

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setTask({ ...task, file: files[0] });
    } else {
      setTask({ ...task, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(task).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log("Task Submitted:", task);
    alert("Task assigned successfully!");

    setTask({
      title: "",
      description: "",
      deadline: "",
      student: "",
      file: null,
    });
    e.target.reset();
  };

  return (
    <div>
        <Header/>
    
    <div className="task-container">
      <h2>📋 Assign a New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label><FaHeading /> Task Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Build a Login Page"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label><FaFileAlt /> Task Description</label>
          <textarea
            name="description"
            placeholder="Write detailed task description..."
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label><FaCalendarAlt /> Deadline</label>
          <input
            type="date"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label><FaUserGraduate /> Assign to Student</label>
          <select
            name="student"
            value={task.student}
            onChange={handleChange}
            required
          >
            <option value="">Select a student</option>
            {students.map((student, index) => (
              <option key={index} value={student}>
                {student}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label><FaRegFilePdf /> Upload Task PDF (Optional)</label>
          <input
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleChange}
          />
        </div>

        <button type="submit">🚀 Assign Task</button>
      </form>
    </div>
    </div>
  );
}
