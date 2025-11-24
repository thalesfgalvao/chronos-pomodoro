import S from './styles.module.css';

interface IForm extends React.ComponentProps<'input'> {
  labelText: string;
  id: string;
}

export const DefaultInput = ({ labelText, id, ...rest }: IForm) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={S.input} {...rest} />
    </>
  );
};
