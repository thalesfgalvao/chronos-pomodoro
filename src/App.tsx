import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useState } from 'react';

export const App = () => {
  const [buttonClicked, isButtonClicked] = useState(false);
  const handleClick = () => {
    isButtonClicked(!buttonClicked);
  };
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
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
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            {buttonClicked ? (
              <DefaultButton
                icon={<StopCircleIcon />}
                color='red'
                onClick={handleClick}
              />
            ) : (
              <DefaultButton
                icon={<PlayCircleIcon />}
                color='green'
                onClick={handleClick}
              />
            )}
          </div>
        </form>
      </Container>
    </>
  );
};
