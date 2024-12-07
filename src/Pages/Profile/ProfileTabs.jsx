import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileTabs = ({ activeTab, setActiveTab, handleLogout }) => {
  return (
    <div className="profile-tabs mb-4">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Profile Settings
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <FontAwesomeIcon icon={faClipboardList} className="me-2" />
            Orders
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-danger"
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileTabs;