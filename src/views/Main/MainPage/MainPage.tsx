import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={
          'text-center text-2xl font-medium my-4 mx-2 p-4 hover:cursor-pointer border border-2 border-black rounded-lg hover:bg-gray-100 transition'
        }
        onClick={() => navigate('/spells')}
      >
        Spells
      </div>
    </div>
  );
};
