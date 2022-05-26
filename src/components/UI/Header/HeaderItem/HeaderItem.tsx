import { To, useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  to: To;
}

export const HeaderItem: React.FC<Props> = ({ title, to }) => {
  const navigate = useNavigate();

  return (
    <div
      className="hover:bg-gray-100 hover:shadow-inner h-full flex items-center transition px-5 cursor-pointer"
      onClick={() => {
        navigate(to);
      }}
    >
      <div>{title.toUpperCase()}</div>
    </div>
  );
};
