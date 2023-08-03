// NotFound.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const loginedUser = localStorage.getItem('loginedUser');

  const handleGoBack = () => {
    if (loginedUser) {
      navigate('/');
    }

    navigate('/login');
  };

  return (
    <>
      <div className="max-w-md">
        <h1 className="text-5xl text-center">404 - Not Found</h1>
        <p className="my-6">The page you are looking for does not exist.</p>
        <Button onClick={handleGoBack} type="primary">
          {loginedUser ? 'Go to Home' : 'Go to Login'}
        </Button>
      </div>
    </>
  );
};
