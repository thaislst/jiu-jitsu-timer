export default function ActionButton({isRunning, onStart, onPause}) {

  const handleClick = (evt) => {
    if(!isRunning){
      onStart()
    }else {
      onPause()
    }
  }

  return (
    <button onClick={handleClick}>
      {isRunning? 'PARAR' : 'COMEÇAR'}
    </button>
  )
}