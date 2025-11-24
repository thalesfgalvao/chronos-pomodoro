import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import S from './styles.module.css';

export const Menu = () => {
  return (
    <>
      <nav className={S.menu}>
        <a className={S.menuLink} href='#'>
          <HouseIcon />
        </a>
        <a className={S.menuLink} href='#'>
          <HistoryIcon />
        </a>
        <a className={S.menuLink} href='#'>
          <SettingsIcon />
        </a>
        <a className={S.menuLink} href='#'>
          <SunIcon />
        </a>
      </nav>
    </>
  );
};
