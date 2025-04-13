import React from 'react';
import './Students.css';
import Header from'./Header';
const studentsData = [
  {
    id: 12289,
    firstName: 'Daisy',
    lastName: 'Scott',
    email: 'daisy22@gmail.com',
    phone: '+442146886341',
    year: 'Grade 10',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 12288,
    firstName: 'Isabel',
    lastName: 'Harris',
    email: 'isabel887@gmail.com',
    phone: '+442251886322',
    year: 'Grade 12',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  // Add more students here...
];

const Students = () => {
  return (
    <div>
        <Header/>
    
    <div className="students-container">
      <div className="students-header">
        <select className="school-dropdown">
          <option value="bigben">Big Ben</option>
          <option value="oxford">Oxford</option>
        </select>
        <div className="right-buttons">
          <button className="filter-btn">🔍</button>
          <button className="add-btn">+ Add a student</button>
        </div>
      </div>

      <table className="students-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Year group</th>
            <th>Chat</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr key={student.id}>
              <td>
                <img src={student.image} alt={student.firstName} className="avatar" />
              </td>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.year}</td>
              <td>
                <button className="chat-btn">💬</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled>←</button>
        <span>1 of 10</span>
        <button>→</button>
      </div>
    </div>
    </div>
  );
};

export default Students;
