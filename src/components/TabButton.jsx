export default function TabButton({selected, onClick, children}) {
  return(
    <button onClick={onClick}>
      {children}
    </button>
  )
}