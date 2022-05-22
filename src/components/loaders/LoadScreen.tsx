import React from 'react';
import { SpinLoader } from './SpinLoader';

export const LoadScreen: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SpinLoader />
    </div>
  );
};
