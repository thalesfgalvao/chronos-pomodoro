import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import S from './styles.module.css';
import { useEffect, useState } from 'react';

type AvaliableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvaliableThemes>('dark');
  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return () => {
      console.log('Atualizando este componente');
    };
  }, [theme]);
  return (
    <>
      <nav className={S.menu}>
        <a className={S.menuLink} href='#' aria-label='Home' title='Home'>
          <HouseIcon />
        </a>
        <a
          className={S.menuLink}
          href='#'
          aria-label='Histórico'
          title='Histórico'
        >
          <HistoryIcon />
        </a>
        <a
          className={S.menuLink}
          href='#'
          aria-label='Configurações'
          title='Configurações'
        >
          <SettingsIcon />
        </a>
        <a
          className={S.menuLink}
          href='#'
          aria-label='Mudar tema'
          title='Mudar tema'
          onClick={event => handleThemeChange(event)}
        >
          <SunIcon />
        </a>
      </nav>
    </>
  );
};
