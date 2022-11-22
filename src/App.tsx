import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Auth/LoginButton';
import './App.css';
import LogoutButton from './Auth/LogoutButton';
import Profile from './Auth/Profile';

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  return (
    <>
      {isLoading ? 
        'Loading...' 
        : isAuthenticated ?
          <>
            <Profile />
            <LogoutButton />
          </>
          : <LoginButton />
      }
    </>
  );
};

export default App;