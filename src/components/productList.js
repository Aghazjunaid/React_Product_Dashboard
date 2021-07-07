import React, { useState, useEffect } from "react";
import Header from "./header";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect( () => {
    getData()
  }, []);

  async function getData(){
    let result = await fetch("http://localhost:8000/product");
    result = await result.json();
    setData(result.data);

  }

  async function deleteData(_id) { 
    let result = await fetch(`http://localhost:8000/product/${_id}`, {
      method: "DELETE",
    });
    result = await result.json();
    console.log("result", result);
    getData()
  }

  return (
    <div>
      <Header />
      <h1 className="text-center">Product Listing</h1>
      <Container style={{ marginTop: "25px" }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Desciption</th>
              <th>Price</th>
              <th>Currency</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.currency}</td>
                <td>
                  <Button
                                    style={{ margin: "8px", cursor:"pointer"}}

                    variant="danger"
                    onClick={() => {
                      deleteData(item._id);
                    }}
                  >
                    Delete
                  </Button>
                  <Link to={"update/"+item._id}>
                  <Button
                  style={{ margin: "8px" }}
                    variant="primary"
                  >
                    Update
                  </Button>

                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProductList;
