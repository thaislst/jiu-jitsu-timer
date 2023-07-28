export default function TabButton({selected, onClick, children}) {
  return(
    <button className={`${selected ? 'selected' : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}