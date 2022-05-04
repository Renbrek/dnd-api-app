import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { thunkFetchSpell } from '../../../store/spell/spell.slice';
import { SpinLoader } from '../../../components/loaders/SpinLoader';

export const SpellPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { index } = useParams();
  const spell = useSelector((state: RootState) => state.spellReducer);

  useEffect(() => {
    dispatch(thunkFetchSpell(index));
  }, [dispatch, index]);

  if (spell.status === 'pending') {
    return (
      <div>
        <SpinLoader />
      </div>
    );
  }

  if (spell.status === 'succeeded') {
    return (
      <div className={'container'}>
        <div className={'font-bold text-5xl'}>{spell.item.name}</div>
        <div>
          <pre>{JSON.stringify(spell, null, 2)}</pre>
        </div>
      </div>
    );
  }

  return <div></div>;
};
