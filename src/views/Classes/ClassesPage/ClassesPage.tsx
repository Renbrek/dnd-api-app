import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import NavigateItem from "../../../components/UI/NavigateItem/NavigateItem";
import { LoadScreen } from "../../../components/loaders/LoadScreen";
import { thunkFetchClasses } from "../../../store/classes/classes.slice";

const ClassesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const classesState = useAppSelector((state) => state.classesReducer);

  useEffect(() => {
    dispatch(thunkFetchClasses());
  }, [dispatch]); 


  const classesDiv = classesState.items.map((c) => (
    <NavigateItem key={c.index} title={c.name} to={c.index} />
  ));

  if (classesState.status === "pending") {
    return <LoadScreen />;
  }

  return (
    <div className={"container"}>
      <div className={"font-bold text-5xl pb-10 pt-5"}>Spells</div>
      <div className={"flex justify-center"}>
        <div>{classesDiv}</div>
      </div>
    </div>
  );
};

export default ClassesPage;
