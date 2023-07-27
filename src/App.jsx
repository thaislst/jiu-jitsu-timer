  import { useState } from 'react'
  import useAnimationFrame from './hooks/useAnimationFrame'
  import Display from './components/Display'
  import ActionButton from './components/ActionButton'
  import TabButton from './components/TabButton'
  import './App.css'

  const MODES = {
    'luta': 6*60,
    'descanso': 40,
  }

  function App() {  

    const [timeInSeconds, setTimeInSeconds] = useState(MODES['luta']);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('luta')
    

    const handleStart = () => {
      setIsRunning(true);
      
    };

    useAnimationFrame(deltaTime => {
      if(!isRunning) {
        return;
      }
      setTimeInSeconds((t) => {
        const currentTime = t-(deltaTime/1000)
        if(currentTime > 0) {
          return currentTime
        }
      })
    });

    const handlePause = () => {
      setIsRunning(false);
      return 0
    }

    const handleChangeMode = (newMode) => () => changeMode(newMode)

    const changeMode = (newMode) => {
      handlePause()
      setTimeInSeconds(MODES[newMode])
      setMode(newMode)
    }

    return (
      <>
          <header>
            Jiu-Jitsu
            <br /><span>Timer</span>
          </header>

          <div className='timer-board cover'>
            <div className='choices switcher'>
              <TabButton onClick={handleChangeMode('luta')} >Luta</TabButton>
              <TabButton onClick={handleChangeMode('descanso')}>Descanso</TabButton>
            </div>
            
            <div className='timer'>
            <Display timeInSeconds={timeInSeconds}  />
            </div>
            
            <div className="start">
              <ActionButton onStart={handleStart} onPause={handlePause} isRunning={isRunning}/>
            </div>
          </div>  
      </>
    )
  }

  export default App
