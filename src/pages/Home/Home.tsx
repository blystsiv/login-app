import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';

export const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const loginedUserData = localStorage.getItem('loginedUser');
      if (loginedUserData) {
        const user = JSON.parse(loginedUserData);
        setUsername(user.username);
      }
    } catch (error) {
      console.log('Error retrieving logined user from local storage:', error);
    }
  }, []);

  const handleLogout = () => {
    if (localStorage.getItem('loginedUser')) {
      localStorage.removeItem('loginedUser');
      navigate('/login', { replace: true });
    }
  };

  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-5xl mb-6 text-center">Hi, {username}!</h1>
        <Button onClick={handleLogout} variant="close">
          Logout
        </Button>
      </div>
    </>
  );
};
