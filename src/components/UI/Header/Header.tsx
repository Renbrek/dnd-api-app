import React from 'react';
import { HeaderItem } from './HeaderItem/HeaderItem';

export const Header = () => {
  return (
    <div className="w-screen shadow-xl fixed bg-white h-20 flex items-center justify-center z-50">
      <div className="flex justify-evenly w-2/3 h-full">
        <HeaderItem title="Home" to={'/'} />
        <HeaderItem title="Classes" to={'/classes'} />
        <HeaderItem title="Spells" to={'/spells'} />
      </div>
    </div>
  );
};
