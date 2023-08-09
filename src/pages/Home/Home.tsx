import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';

export const Home: React.FC = () => {
  const [username] = useState('Ostap');
  const navigate = useNavigate();

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
