import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Header from './header'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem("userData")){
            history.push("/add")
        }
    },[])

    async function login(e){
        e.preventDefault();

        let userData = {email, password}
        console.log(userData)
        let result = await fetch("http://localhost:8000/login",{
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
        history.push("/add")
    }


    return (
        <div>
        <Header />
        <Container>
          <Row style={{ marginTop: "60px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={login}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email Address" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      )
}

export default Login
