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

  if (spell.status === 'loading') {
    return (
      <div>
        <SpinLoader />
      </div>
    );
  }

  if (spell.status === 'resolved') {
    return (
      <div>
        <div>{JSON.stringify(spell)}</div>
      </div>
    );
  }

  return <div></div>;
};
