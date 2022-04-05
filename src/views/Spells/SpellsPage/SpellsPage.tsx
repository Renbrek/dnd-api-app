import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { thunkFetchSpells } from '../../../store/spells/spells.slice';
import { useNavigate } from 'react-router-dom';

export const SpellsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const spells = useSelector((state: RootState) => state.spellsReducer.items);
  const navigate = useNavigate();

  const spellHandle = async (index: any) => {
    navigate(index);
  };

  useEffect(() => {
    dispatch(thunkFetchSpells());
  }, [dispatch]);

  const spellsDiv = spells.map((spell) => (
    <div
      key={spell.index}
      className={
        'text-center text-2xl font-medium my-4 mx-2 p-4 hover:cursor-pointer border-2 border-black rounded-lg hover:bg-gray-100 transition'
      }
      onClick={() => spellHandle(spell.index)}
    >
      {spell.name}
    </div>
  ));

  return (
    <div className={'flex justify-center'}>
      <div>{spellsDiv}</div>
    </div>
  );
};
