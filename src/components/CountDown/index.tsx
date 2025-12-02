import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import S from './styles.module.css';

export const CountDown = () => {
  const { state } = useTaskContext();
  return (
    <>
      <div className={S.container}>{state.formattedSecondsRemaining}</div>
    </>
  );
};
