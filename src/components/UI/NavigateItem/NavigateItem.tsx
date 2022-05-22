import React from "react";
import { useNavigate } from "react-router-dom";

interface NavigateItemProps {
  title: string;
  to: string;
}

const NavigateItem: React.FC<NavigateItemProps> = ({ title, to }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        "w-80 text-center text-2xl font-medium my-4 mx-2 p-4 hover:cursor-pointer border-2 border-black rounded-lg hover:bg-gray-100 transition"
      }
      onClick={() => navigate(to)}
    >
      {title}
    </div>
  );
};

export default NavigateItem;
