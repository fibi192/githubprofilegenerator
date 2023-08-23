import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="User Avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      {/* Add more user information here as needed */}
    </div>
  );
};

export default UserProfile;
