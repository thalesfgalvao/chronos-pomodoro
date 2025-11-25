import S from './styles.module.css';
interface IGenericHtml {
  children: React.ReactNode;
}

export const GenericHtml = ({ children }: IGenericHtml) => {
  return <div className={S.genericHtml}>{children}</div>;
};
