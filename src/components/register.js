import React, { useState, useEffect } from "react";
import Header from "./header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';

function Register() {
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem("userData")){
            history.push("/")
        }
    },[])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    async function register(e){
        e.preventDefault();

        let userData = {name, email, phone, password}
        console.log(userData)
        let result = await fetch("http://localhost:8000/register",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        })
        result = await result.json();
        console.log("result",result)
        localStorage.setItem("userData", JSON.stringify(result));
        history.push("/")
    }

  return (
    <div>
      <Header />
      <Container>
      <h1 className="text-center">Register</h1>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={register}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Full Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email Address" />
              </Form.Group>
              <Form.Group controlId="formBasicMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Mobile Number" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
