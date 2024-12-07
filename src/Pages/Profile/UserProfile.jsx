import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileTabs from './ProfileTabs';
import ProfileUpdate from './ProfileUpdate';
import OrderHistory from './OrderHistory';
import axios from 'axios';
import toast from 'react-hot-toast';

function UserProfile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const user = JSON.parse(sessionStorage.getItem('user'));
  const token = sessionStorage.getItem('authToken');
//   const userId = user._id

  if (!user || !token) {
    return (
      <div className="container py-5 text-center">
        <h2>Please login to view your profile</h2>
      </div>
    );
  }

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleProfileUpdate = async (updatedData) => {
    const userId = user._id; 
    const formData = updatedData; 

    try {
      // Make API call to update the user profile
      const res = await axios.put(
        `http://localhost:7000/api/v1/update-user/${userId}`, // Ensure the endpoint supports PUT for updates
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update session storage with the new user data
      const updatedUser = res.data.user; // Assuming the API response includes the updated user object
      sessionStorage.setItem('user', JSON.stringify(updatedUser));

      // Show success message
    //   alert('Profile updated successfully!');
    toast.success('Profile updated successfully!')
    } catch (error) {
      console.error('Error updating profile:', error);
    //   alert('Failed to update profile. Please try again.');
    toast.error('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="profile-page">
      <ProfileHeader user={user} />
      
      <div className="container">
        <ProfileStats user={user} />
        
        <ProfileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleLogout={handleLogout}
        />
        
        <div className="tab-content">
          {activeTab === 'profile' ? (
            <ProfileUpdate user={user} onUpdate={handleProfileUpdate} />
          ) : (
            <OrderHistory />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;