import S from './styles.module.css';

interface IContainer {
  children?: React.ReactNode;
}

export const Container = ({ children }: IContainer) => {
  return (
    <div className={S.container}>
      <div className={S.content}>{children}</div>
    </div>
  );
};
