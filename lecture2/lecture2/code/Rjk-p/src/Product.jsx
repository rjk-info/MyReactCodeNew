import "./Product.css"
import Price from "./Price";

function Product({ title , idx , price , dis }) {

  let oldPrice = ["12,495" , "8,500" , "1,499" , "2,999"] ;
  let newPrice = ["9,999" , "7,999" , "1,199" , "2,499"] ;
  let Discription = [["Wireless Mouse" , "5 Programmable buttons" ] ,
   ["Stylus" , "Ergonomic design" ] ,
    ["Bluetooth Speaker" , "10 hours of battery life" ] ,
     ["Wireless Mouse" , "5 Programmable buttons" ]] ;

  return (
        <div className="product">
          <h4>{title}</h4>
          <p>{Discription[idx][0]}</p>
          <p>{Discription[idx][1]}</p>
          <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/>
        </div>
      ) ;
      }

  

export default Product ;