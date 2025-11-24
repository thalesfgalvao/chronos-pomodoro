import S from './styles.module.css';

export const Cycles = () => {
  return (
    <div className={S.cycles}>
      <span>Ciclos</span>
      <div className={S.cycleDots}>
        <span className={`${S.cycleDot} ${S.workTime}`}></span>
        <span className={`${S.cycleDot} ${S.shortBreakTime}`}></span>
        <span className={`${S.cycleDot} ${S.workTime}`}></span>
        <span className={`${S.cycleDot} ${S.shortBreakTime}`}></span>
        <span className={`${S.cycleDot} ${S.workTime}`}></span>
        <span className={`${S.cycleDot} ${S.shortBreakTime}`}></span>
        <span className={`${S.cycleDot} ${S.workTime}`}></span>
        <span className={`${S.cycleDot} ${S.longBreakTime}`}></span>
      </div>
    </div>
  );
};
