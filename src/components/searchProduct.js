import React, { useState } from "react";
import Header from "./header";
import { Table, Container, Form, Row, Col } from "react-bootstrap";

function SearchProduct() {
  const [data, setData] = useState([]);

  async function search(key) {
      
    let result = await fetch("http://localhost:8000/productsearch/" + key);
    result = await result.json();
    setData(result.data);
    console.log("result", result.data);
  }
  return (
    <div>
      <Header />
      <Container>
        <h1 className="text-center">Search Product</h1>
        <Form>
          <Row style={{ marginTop: "30px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group>
                <Form.Control
                  type="text"
                  onChange={(e) => search(e.target.value)}
                  placeholder="Enter Product Name"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        {
            data.length>0?
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
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.currency}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          :null
        }
      </Container>
    </div>
  );
}

export default SearchProduct;
