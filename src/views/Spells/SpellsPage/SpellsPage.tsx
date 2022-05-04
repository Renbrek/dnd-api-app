import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { thunkFetchSpells } from '../../../store/spells/spells.slice';
import { useNavigate } from 'react-router-dom';
import { SpinLoader } from '../../../components/loaders/SpinLoader';

export const SpellsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const spellsStatus = useSelector(
    (state: RootState) => state.spellsReducer.status
  );
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
        'text-center text-2xl font-medium my-4 mx-2 p-4 border-2 border-black rounded-lg transition hover:bg-gray-100 hover:cursor-pointer'
      }
      onClick={() => spellHandle(spell.index)}
    >
      {spell.name}
    </div>
  ));

  if (spellsStatus === 'pending') {
    return (
      <div>
        <SpinLoader />
      </div>
    );
  }

  return (
    <div className={'container'}>
      <div className={'font-bold text-5xl'}>Spells</div>
      <div className={'flex justify-center'}>
        <div>{spellsDiv}</div>
      </div>
    </div>
  );
};
