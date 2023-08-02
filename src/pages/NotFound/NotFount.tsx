// NotFound.tsx
import React from 'react';

import { Button } from '../../components';

export const NotFound: React.FC = () => {
  const handleGoBack = () => {
    console.log('Go back clicked!');
  };

  return (
    <>
      <div className="max-w-md">
        <h1 className="text-5xl mb-6 text-center">404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Button onClick={handleGoBack} type="primary">
          Go Back
        </Button>
      </div>
    </>
  );
};
