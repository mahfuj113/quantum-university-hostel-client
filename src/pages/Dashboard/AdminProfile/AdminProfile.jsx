import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const { displayName, photoURL, email } = user;
  return (
    <div>
      <div>
        <img src={photoURL} alt="" />
        <h1>{displayName}</h1>
      </div>
      <div>
        <h3>{email}</h3>
      </div>
    </div>
  );
};

export default AdminProfile;
