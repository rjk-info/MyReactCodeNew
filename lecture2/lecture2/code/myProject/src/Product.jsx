import "./Product.css"
import Price from "./Price";
function Product({title, idx}) {
  let oldPrice = [100, 200, 300, 400];
  let newPrice = [90, 190, 290, 390];

  let Discription = [["Wireless Mouse" , "5 Programmable buttons" ] ,
  ["Stylus" , "Ergonomic design" ] ,
   ["Bluetooth Speaker" , "10 hours of battery life" ] ,
    ["Wireless Mouse" , "5 Programmable buttons" ]] ;
  return (
    <div className="product">
      <h3>{title}</h3>
      <p>{Discription[idx][0]}</p>
      <p>{Discription[idx][1]}</p>
      <Price newPrice={oldPrice[idx]} oldPrice={newPrice[idx]}/>
    </div>
  );
}

export default Product;