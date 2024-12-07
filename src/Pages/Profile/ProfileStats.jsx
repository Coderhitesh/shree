import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faUsers, faCoins } from '@fortawesome/free-solid-svg-icons';

const ProfileStats = ({ user }) => {
  return (
    <div className="row g-4 mb-4">
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center">
            <FontAwesomeIcon icon={faGift} className="text-primary mb-3" size="2x" />
            <h5 className="card-title">Referral Bonus</h5>
            <h3 className="mb-0">₹{user.referralCodeBonus}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center">
            <FontAwesomeIcon icon={faUsers} className="text-success mb-3" size="2x" />
            <h5 className="card-title">Total Referrals</h5>
            <h3 className="mb-0">{user.RefrealUserIds.length}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center">
            <FontAwesomeIcon icon={faCoins} className="text-warning mb-3" size="2x" />
            <h5 className="card-title">Account Status</h5>
            <h3 className="mb-0">{user.isVerified ? 'Verified' : 'Unverified'}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;