import React, { useContext, useState } from 'react';
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    //CardBody,
    CardFooter,
    CardHeader
} from "reactstrap";

import firebase from 'firebase/app';
import {UserContext} from "../Context/UserContext";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";

const SignIn = () => {
    const context = useContext(UserContext);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            context.setUser({email: res.user.email, uid: res.user.uid})
        })
        .catch(error => {
            toast(error.message, {type: "error"})
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        handleSignIn();
    }

    if(context.user?.uid){
        return <Redirect to="/"/>
    }

    return (
        <Container className="text-center">
            <Row>
                <Col lg= {6}className="offset-lg-3 mt-5">
                    <Card className="pt-10">
                        <CardHeader>Sign In</CardHeader>
                        <Row>
                            <Col sm={10} className="offset-md-1 mt-3">
                                <Form onSubmit={handleSubmit}> 
                                    <FormGroup row>
                                        <Label sm={3}>Email</Label>
                                        <Col sm={9}>
                                            <Input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Email" 
                                            value={email} 
                                            onChange={e => setEmail(e.target.value)}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm={3}>Password</Label>
                                        <Col sm={9}>
                                            <Input 
                                            type="password" 
                                            name="password" 
                                            placeholder="Password" 
                                            value={password} 
                                            onChange={e => setPassword(e.target.value)}/>
                                        </Col>
                                    </FormGroup>
                                <CardFooter><Button type="submit" color="primary" block>Sign In</Button></CardFooter>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;