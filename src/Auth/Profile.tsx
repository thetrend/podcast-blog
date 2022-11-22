import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (    
      <div className="d-block">
        {user!.name}
      </div>
  );
};

export default Profile;