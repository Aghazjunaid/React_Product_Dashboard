import React, { useEffect, useState } from "react";
import Header from "./header";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';


function UpdateProduct(props) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [currency, setCurrency] = useState("");
  const history = useHistory()

  console.log(props.match.params.id);
  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8000/product/" + props.match.params.id
    );
    result = await result.json();
    setData(result.data[0]);
    console.log(result.data[0])
  }, []);
  async function updateProduct(e){
    e.preventDefault();

    let productData = {name, description, price, currency}
    console.log(productData)
    let result = await fetch("http://localhost:8000/product/"+props.match.params.id,{
        method: 'PUT',
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(productData)
    })
    result = await result.json();
    console.log("result",result)
    history.push("/")

  }

  return (
    <div>
      <Header />
      <Container>
        <h1 className="text-center">Update Product</h1>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={updateProduct}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  defaultValue={data.name}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      defaultValue={data.price}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Select Currency</Form.Label>
                    <Form.Control
                      defaultValue={data.currency}
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
                  defaultValue={data.description}
                  as="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Product
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(UpdateProduct);
