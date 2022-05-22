import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { thunkFetchSpellByIndex } from "../../../store/spell/spell.slice";
import { LoadScreen } from "../../../components/loaders/LoadScreen";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { selectSpellState } from "../../../store/spell/spell.selectors";

export const SpellPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { index } = useParams();
  const spellState = useAppSelector(selectSpellState);

  useEffect(() => {
    dispatch(thunkFetchSpellByIndex(index));
  }, [dispatch, index]);

  if (spellState.status === "pending") {
    return <LoadScreen />;
  }

  if (spellState.status === "succeeded") {
    return (
      <div className={"container"}>
        <div className={"font-bold text-5xl pb-10 pt-5"}>
          {spellState.item?.name}
        </div>
        <div>
          <pre>{JSON.stringify(spellState, null, 2)}</pre>
        </div>
      </div>
    );
  }

  return <div></div>;
};
