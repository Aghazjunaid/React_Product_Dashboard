import React, { useState, useEffect } from "react";
import Header from "./header";
import { Table, Container } from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);
debugger
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/product");
    result = await result.json();
    debugger;
    setData(result.data);
  }, []);

  console.log("data", data);

  return (
    <div>
      <Header />
      <h1 className="text-center">Product Listing</h1>
      <Container style={{ marginTop:"25px"}}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Desciption</th>
              <th>Price</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
              {
                  data.map((item, index) =>
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.currency}</td>
                </tr>)
              }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProductList;
