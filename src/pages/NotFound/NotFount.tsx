import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [userLogined, setUserLogined] = useState(false);

  useEffect(() => {
    try {
      const loginedUserData = localStorage.getItem('loginedUser');

      if (loginedUserData) {
        setUserLogined(true);
      }
    } catch (error) {
      console.log('Error retrieving logined user from local storage:', error);
    }
  }, []);

  const handleGoBack = () => {
    if (userLogined) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className="max-w-md">
        <h1 className="text-5xl text-center">404 - Not Found</h1>
        <p className="my-6">The page you are looking for does not exist.</p>
        <Button onClick={handleGoBack} variant="primary">
          {userLogined ? 'Go to Home' : 'Go to Login'}
        </Button>
      </div>
    </>
  );
};
