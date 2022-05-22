import React, { useEffect } from "react";
import { thunkFetchSpells } from "../../../store/spells/spells.slice";
import { LoadScreen } from "../../../components/loaders/LoadScreen";
import NavigateItem from "../../../components/UI/NavigateItem/NavigateItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  selectSpells,
  selectSpellsStatus,
} from "../../../store/spells/spells.selectors";

export const SpellsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const spellsStatus = useAppSelector(selectSpellsStatus);
  const spells = useAppSelector(selectSpells);

  useEffect(() => {
    dispatch(thunkFetchSpells());
  }, [dispatch]);

  const spellsDiv = spells.map((spell) => (
    <NavigateItem key={spell.index} to={spell.index} title={spell.name} />
  ));

  if (spellsStatus === "pending") {
    return <LoadScreen />;
  }

  return (
    <div className={"container"}>
      <div className={"font-bold text-5xl pb-10 pt-5"}>Spells</div>
      <div className={"flex justify-center"}>
        <div>{spellsDiv}</div>
      </div>
    </div>
  );
};
