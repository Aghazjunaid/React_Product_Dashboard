import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Header from "./header";

function AddProduct() {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [currency, setCurrency] = useState("");
  const history = useHistory()

  async function addProduct(e){
    e.preventDefault();

    let productData = {product, description, price, currency}
    console.log(productData)
    debugger
    let result = await fetch("http://localhost:8000/product",{
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(productData)
        
    })
    debugger
    result = await result.json();
    console.log("result",result)
    history.push("/")
}


  console.log(price,currency)

  return (
    <div>
      <Header />
      <Container>
      <h1 className="text-center">Add Product</h1>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={addProduct}>
              <Form.Group>
                <Form.Label>Product</Form.Label>
                <Form.Control
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="Enter Product"
                />
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      placeholder="Enter price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Select Currency</Form.Label>
                    <Form.Control
                      as="select"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="Dollar">Dollar</option>
                      <option value="Rupee">Rupee</option>
                      <option value="Euro">Euro</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter Description"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Product
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddProduct;
