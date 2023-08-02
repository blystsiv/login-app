import React, { useState } from 'react';

import { Button } from '../../components';

export const Home: React.FC = () => {
  const [username] = useState('Ostap');

  const handleLogout = () => {
    console.log('Logout clicked!');
  };

  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-5xl mb-6 text-center">Hi, {username}!</h1>
        <Button onClick={handleLogout} type="close">
          Logout
        </Button>
      </div>
    </>
  );
};
