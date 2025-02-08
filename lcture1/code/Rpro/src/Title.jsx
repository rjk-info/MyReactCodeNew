import "./Title.css"
function Title({title,price}) {
  return (
  <div className="Title">
    <h1>{title}</h1>
    <h3> {price}</h3>
    </div>
  )
}

export default Title ;