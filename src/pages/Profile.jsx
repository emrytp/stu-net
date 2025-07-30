// src/pages/Profile.jsx
import React from "react";
import { useAuth } from "../context/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="text-white text-center mt-20">
      <h1 className="text-3xl font-bold">Profil Sayfası</h1>
      <p className="mt-4">Hoş geldin, <span className="font-semibold">{user?.name}</span>!</p>
    </div>
  );
};

export default Profile; 
