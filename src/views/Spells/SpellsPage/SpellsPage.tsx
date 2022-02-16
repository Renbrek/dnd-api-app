import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import {fetchSpells} from '../../../store/spells/spells.slice';


export const SpellsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const spells = useSelector((state: RootState) => state.spellsReducer.items);

  const spellHandle = async (index: any) => {
    const response = await fetch(`https://www.dnd5eapi.co/api/spells/${index}/`).then(response => response.json());
    console.log(response);
  };

  useEffect(() => {
    dispatch(fetchSpells());
  }, [dispatch]);

  const spellsDiv = spells.map((spell) => (
    <div key={spell.index}
         className={'text-center text-2xl font-medium my-4 mx-2 p-4 hover:cursor-pointer border border-2 border-black rounded-lg hover:bg-gray-100 transition'}
         onClick={() => spellHandle(spell.index)}>
      {spell.name}
    </div>
  ));

  return (
    <div className={'flex justify-center'}>
      <div>
        {spellsDiv}
      </div>
    </div>
  );
};