export default function MsgBox({userName, textColor}) {
  return (
    <div>
      <h1 style = {{color: textColor}}>Welcome to {userName}!</h1>
    </div>
  )
}