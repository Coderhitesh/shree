import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

const ProfileUpdate = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    FullName: user.FullName,
    ContactNumber: user.ContactNumber,
    Email: user.Email
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h4 className="card-title mb-4">Update Profile</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="FullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="FullName"
              name="FullName"
              value={formData.FullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="ContactNumber" className="form-label">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              id="ContactNumber"
              name="ContactNumber"
              value={formData.ContactNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faSave} className="me-2" />
              Save Changes
            </button>
            <button type="reset" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faTimes} className="me-2" />
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;