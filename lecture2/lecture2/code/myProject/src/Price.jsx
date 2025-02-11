function Price({ oldPrice, newPrice }) {
  let styles = {
    textDecoration: "line-through",
  }

  let styles1 = {
    fontWeight: "bold",
  }

  let styles2  = { 
    background: "#e0c367",
    height: "30px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  }
  return (
    <div style={styles2}>
      <span style={styles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={styles1}>{newPrice}</span>
    </div>
  );
}

export default Price;