import S from './styles.module.css';

interface IDefaultInput extends React.ComponentProps<'input'> {
  labelText: string;
  id: string;
}

export const DefaultInput = ({ labelText, id, ...rest }: IDefaultInput) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={S.input} {...rest} />
    </>
  );
};
