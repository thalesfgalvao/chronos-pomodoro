import { createContext, useContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemainig: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

interface ITaskContextProps {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
  state: initialState, //Pode ser usado como um placeholder, pois esses valores serão substituidos.
  setState: () => {},
};

export const TaskContext =
  createContext<ITaskContextProps>(initialContextValue);

interface ITaskContextProviderProps {
  children: React.ReactNode;
}

export const TaskContextProvider = ({
  children,
}: ITaskContextProviderProps) => {
  return (
    <TaskContext.Provider
      value={
        {
          ...initialContextValue,
        } /*Aqui será passado o real valor do provider */
      }
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
