export default function Display({timeInSeconds}) {

  const doubleDigit = (num) => num.toString().length > 1 ? num : `0${num}`

  const parseTime = (time) => {
    const roundedTime = Math.floor(time)
    const minute =  Math.floor(roundedTime/60)
    const second = roundedTime%60
    
    return `${doubleDigit(minute)}:${doubleDigit(second)}`

  }
  
  return (
  <div> {parseTime(timeInSeconds)} </div>
  )
    
  }