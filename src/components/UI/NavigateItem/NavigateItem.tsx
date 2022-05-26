import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigateItemProps {
  title: string;
  to: string;
}

const NavigateItem: React.FC<NavigateItemProps> = ({ title, to }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        ' w-80 text-center text-2xl font-medium my-7 mx-2 p-4 shadow-lg backdrop-blur-lg hover:backdrop-blur-xl hover:shadow-2xl hover:cursor-pointer  transition-shadow'
      }
      onClick={() => navigate(to)}
    >
      {title}
    </div>
  );
};

export default NavigateItem;
