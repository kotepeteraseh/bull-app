import React from 'react';

const ProfilePage = ({ bullBalance }) => {
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <p>Your BULL Balance: {bullBalance}</p>
      <p>Game Statistics: Coming Soon...</p>
    </div>
  );
};

export default ProfilePage;
