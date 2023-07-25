  import { useState } from 'react'
  import useAnimationFrame from './hooks/useAnimationFrame'
  import Display from './components/Display'

  import './App.css'

  const MODES = {
    'luta': 7*60,
    'descanso': 3*60,
  }



  function App() {  

    const [timeInSeconds, setTimeInSeconds] = useState(MODES['luta']);
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
      setIsRunning(true);
    };

    // Using useAnimationFrame hook here
    useAnimationFrame(deltaTime => {
      if(!isRunning) {
        return;
      }
      setTimeInSeconds((t) => {
        const currentTime = t-(deltaTime/1000)
        if(currentTime > 0) {
          return currentTime
        }

        handleStop()
        return 0
      })
    });

    return (
      <>
        <body>
          <header>
            Jiu-Jitsu
            <br /><span>Timer</span>
          </header>

          <div className='timer-board cover'>
            <div className='choices switcher'>
              <button>Luta</button>
              <button>Desncanso</button>
            </div>
            <div className='timer'>
            <Display timeInSeconds={timeInSeconds}  />
            </div>
            

            <div className="start">
              <button onClick={handleStart}>
                START
              </button>    
            </div>
          </div>
        </body>   
      </>
    )
  }

  export default App
