import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

export const MainForm = () => {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          type='text'
          id='meuInput'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>O próximo intervalo é de 25m</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
};
