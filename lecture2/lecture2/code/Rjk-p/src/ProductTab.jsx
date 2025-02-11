import Product from "./Product.jsx";
import Price from "./Price.jsx";

function ProductTab() {

  let styles = {
    display: "flex",
    flexWrap: "wrap",
    margin: "30px 0px",
    justifyContent: "center",
    alineItems: "center"
    

  }
  
  return(
    <div style = {styles}>

      <Product title= "Logitech MX Master" idx = {0} />

      <Product title= "Apple Pencil (2nd Gen)" idx = {1}  /> 

      <Product title= "Zebronics Zeb-transformer" idx = {2} />
      
      <Product title= "Petronics Toad 23" idx = {3} /> 

        {/* {} is used to convert the string into a JavaScript expression. */}

    </div>
  )
}

export default ProductTab; 