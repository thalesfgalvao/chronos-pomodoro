import S from './styles.module.css';

interface IHeading {
  children?: React.ReactNode;
}

export const Heading = ({ children }: IHeading) => {
  return (
    <>
      <h1 className={S.heading}>{children}</h1>
    </>
  );
};
