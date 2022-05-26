import React from 'react';
import NavigateItem from '../../../components/UI/NavigateItem/NavigateItem';

export const MainPage: React.FC = () => {
  return (
    <div className={'container'}>
      <div className={'font-bold text-5xl pb-10 pt-5'}>
        The 5th Edition Dungeons and Dragons
      </div>
      <div className={'flex justify-center'}>
        {/* <div>
          <NavigateItem title={"Spells"} to={"/spells"} />
          <NavigateItem title={"Classes"} to={"/classes"} />
        </div> */}
      </div>
    </div>
  );
};
