import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import S from './styles.module.css';
import { useEffect, useState } from 'react';

type AvaliableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme = //Variavel que pega vallor do  localStorage do useEffect
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark'; //Pode retornar null ou string caso eu não passe  o type. O pipe serve pra padronizar o dark
    return storageTheme;
  });

  const nextThemeIcon = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, //Essa ação impede que uma nova aba seja aberta no evento onClick
  ) => {
    event.preventDefault();

    setTheme(prevTheme => {
      //Estou setando o theme anterior como se fosse uma unção negando !theme
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); //data-theme está no index.html
    localStorage.setItem('theme', theme); //Guardo o theme no localStorage do navegadorr
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
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
};
