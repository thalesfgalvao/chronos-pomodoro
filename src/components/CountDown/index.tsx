import { useTaskContext } from '../../contexts/TaskContext';
import S from './styles.module.css';

export const CountDown = () => {
  const taskContext = useTaskContext();
  console.log(taskContext);
  return (
    <>
      <div className={S.container}>00:00</div>
    </>
  );
};
