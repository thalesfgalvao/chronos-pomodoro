import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';
import { Home } from './pages/Home';
import './styles/global.css';
import './styles/theme.css';
import { TaskContextProvider } from './contexts/TaskContext';

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

export const App = () => {
  const [state, setState] = useState(initialState);
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
};
