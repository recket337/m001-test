function Profile({ name, phone }: { name: string, phone: string }) {
  return (
    <div className="p-4 border rounded">
      <p>
        <strong>Name:</strong>
        {' '}
        {name}
      </p>
      <p>
        <strong>Phone:</strong>
        {' '}
        {phone}
      </p>
    </div>
  );
}

export default Profile;
