import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header bg-primary text-white py-5 rounded-3 mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="profile-avatar">
              <FontAwesomeIcon icon={faUser} size="4x" />
            </div>
          </div>
          <div className="col">
            <h1 className="mb-2">{user.FullName}</h1>
            <p className="mb-1">
              <strong>Email:</strong> {user.Email}
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> {user.ContactNumber}
            </p>
            <p className="mb-0">
              <strong>Referral Code:</strong> {user.referralCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;