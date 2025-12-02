import { Home } from './pages/Home';
import './styles/global.css';
import './styles/theme.css';
import { TaskContextProvider } from './contexts/TaskContext';

export const App = () => {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
};
