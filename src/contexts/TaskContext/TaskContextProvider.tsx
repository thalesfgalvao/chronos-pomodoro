import { useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

interface ITaskContextProviderProps {
  children: React.ReactNode;
}

export const TaskContextProvider = ({
  children,
}: ITaskContextProviderProps) => {
  const [state, setState] = useState(initialTaskState);
  return (
    <TaskContext.Provider
      value={
        {
          state,
          setState,
        } /*Aqui será passado o real valor do provider */
      }
    >
      {children}
    </TaskContext.Provider>
  );
};