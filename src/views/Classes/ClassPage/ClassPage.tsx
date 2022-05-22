import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useParams } from "react-router-dom";
import { LoadScreen } from "../../../components/loaders/LoadScreen";
import { thunkFetchClassByIndex } from "../../../store/class/class.slice";

const ClassPage:React.FC = () => {
  const dispatch = useAppDispatch();
  const { index } = useParams();
  const classState = useAppSelector((state) => state.classReducer);

  useEffect(() => {
    dispatch(thunkFetchClassByIndex(index));
  }, [dispatch, index]);

  if (classState.status === "pending") {
    return <LoadScreen />;
  }

  if (classState.status === "succeeded") {
    return (
      <div className={"container"}>
        <div className={"font-bold text-5xl pb-10 pt-5"}>
          {classState.class.name}
        </div>
        <div>
          <pre>{JSON.stringify(classState, null, 2)}</pre>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default ClassPage