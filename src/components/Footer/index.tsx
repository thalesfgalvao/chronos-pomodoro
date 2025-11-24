import S from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={S.footer}>
      <a href=''>Entenda como funciona a técnica Pomodoro</a>
      <a href=''>Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  );
};
