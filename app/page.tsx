"use client"

async function Profile() {
  const res = await fetch('http://localhost:3000/api');

  const data = await res.json();

  if (!data) return 'Error';

  return (
    <div className="flex justify-center items-center flex-col h-full">
      <p>
        <strong>
          Name:
          {' '}
        </strong>
        {data.name}
      </p>
      <p>
        <strong>
          Phone:
          {' '}
        </strong>
        {data.phone}
      </p>
    </div>
  );
}

export default Profile;
