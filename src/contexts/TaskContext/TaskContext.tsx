import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';

interface ITaskContextProps {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
  state: initialTaskState, //Pode ser usado como um placeholder, pois esses valores serão substituidos.
  setState: () => {},
};

export const TaskContext =
  createContext<ITaskContextProps>(initialContextValue);
