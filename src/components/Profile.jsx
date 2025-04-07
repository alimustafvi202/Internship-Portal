import React, { useState } from 'react';
import './Profile.css';
import Profile from "../assets/profile.jpeg";
const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Mr. Muhammad Ali',
    email: 'mamustafvi202@gmail.com',
    phone: '03120548249',
    regNo: 'B22F08595E044',
    cnic: '1330238668511',
    dob: '08-05-2004',
    religion: 'Islam',
    address: 'House No. 40C Moh Meelad Nagar New Khanpur near P/o & Teh Khanpur Dist Haripur, Haripur, Khyber Pakhtunkhwa',
    batch: 'BSE22F',
    gender: 'Male',
    nationality: 'PAKISTAN',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real application, you would save the updated profile data here.
    console.log('Profile updated:', formData);
  };

  return (
    <div className="profile-container">
      <h1>
        My Profile
        <button onClick={() => setIsEditing(!isEditing)} className="edit-btn">
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </h1>

      {isEditing ? (
        <div className="edit-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <label>Reg. No.</label>
            <input
              type="text"
              name="regNo"
              value={formData.regNo}
              onChange={handleChange}
            />
            <label>CNIC/Form-B No</label>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
            />
            <label>DOB</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            <label>Religion</label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
            />
            <label>Present Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <label>Batch</label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
            />
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <label>Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSave} className="save-btn">
              Save
            </button>
          </form>
        </div>
      ) : (
        <div className="profile-card">
          <div className="profile-left">
            <img src={Profile} alt="Profile" className="profile-img" />
            <div className="profile-name">{formData.name}</div>
            <div className="contact-box">
              <div>
                <i className="icon">📧</i> {formData.email}
              </div>
              <div>
                <i className="icon">📱</i> {formData.phone}
              </div>
              <div>
                <i className="icon">📞</i> 0995
              </div>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-table">
              <div>
                <span>Reg. No.</span> {formData.regNo}
              </div>
              <div>
                <span>CNIC/Form-B No</span> {formData.cnic}
              </div>
              <div>
                <span>DOB</span> {formData.dob}
              </div>
              <div>
                <span>Religion</span> {formData.religion}
              </div>
              <div>
                <span>Present Address</span> {formData.address}
              </div>
              <div>
                <span>Batch</span> {formData.batch}
              </div>
              <div>
                <span>Gender</span> {formData.gender}
              </div>
              <div>
                <span>Nationality</span> {formData.nationality}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
