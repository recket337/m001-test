'use client';

import { useEffect, useState } from "react";

function Profile() {
  const [profileData, setProfileData] = useState({name: '', phone: ''})

  useEffect(() => {
    async function getProfileData() {
      const res = await fetch('api/');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      setProfileData({name: data.name, phone: data.phone});
    }

    getProfileData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col h-full">
      <p>
        <strong>
          Name:
          {' '}
        </strong>
        {profileData.name}
      </p>
      <p>
        <strong>
          Phone:
          {' '}
        </strong>
        {profileData.phone}
      </p>
    </div>
  );
}

export default Profile;
