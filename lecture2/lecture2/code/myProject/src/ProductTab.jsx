import Product from "./Product";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    margin: "30px 0px",
    justifyContent: "center",
    alineItems: "center"
    
}
  
  return (
    <div style={styles}>
      <Product title = "Phone" idx = {0}/>
      <Product title = "Laptop" idx = {1}/>
      <Product title = "Pen" idx = {2}/>
      <Product title = "iPad" idx = {3}/>
    </div>
  );
}

export default ProductTab;