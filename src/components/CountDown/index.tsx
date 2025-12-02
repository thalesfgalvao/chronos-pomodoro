import { useTaskContext } from '../../contexts/TaskContext';
import S from './styles.module.css';

export const CountDown = () => {
  const { state } = useTaskContext();
  return (
    <>
      <div className={S.container}>{state.formattedSecondsRemaining}</div>
    </>
  );
};
