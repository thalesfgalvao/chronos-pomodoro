import { TimerIcon } from 'lucide-react';
import S from './styles.module.css';

export const Logo = () => {
  return (
    <>
      <div className={S.logo}>
        <a className={S.logoLink} href='#'>
          <TimerIcon />
          <span>Chronos</span>
        </a>
      </div>
    </>
  );
};
