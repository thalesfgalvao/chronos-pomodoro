import S from './styles.module.css';

interface IDefaultButton extends React.ComponentProps<'button'> {
  icon: React.ReactNode;
  color?: 'green' | 'red';
}

export const DefaultButton = ({
  icon,
  color = 'green',
  ...props
}: IDefaultButton) => {
  return (
    <>
      <button className={`${S.button} ${S[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
};
