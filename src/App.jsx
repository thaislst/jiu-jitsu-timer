import { useState } from 'react'

import './App.css'

function App() {
  

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
          00:19:05
        </div>

        <div className="start">
          <button>
            START
          </button>    
        </div>


      </div>

     </body>   
      
    </>
  )
}

export default App
