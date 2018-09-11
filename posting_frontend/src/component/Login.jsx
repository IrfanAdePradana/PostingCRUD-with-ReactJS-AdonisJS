import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    async handleUsername(event) {
        this.setState({ ...this.state, username: event.target.value });
    }

    async handlePassword(event) {
        this.setState({ ...this.state, password: event.target.value });
    }

    async handleLogin(event) {
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            const login = await axios.post("http://127.0.0.1:3333/api/post/login", data)
            if (!login) {
                alert("gagal masuk");
            }
            localStorage.setItem("token", login.data.token.token)
            this.props.history.push('/home')
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={e => this.handleLogin(e)}>
                    <Row>
                        <Col sm="auto" md={{ size: 'auto', offset: 5 }}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text" name="username" id="username" placeholder="Username" onChange={e => this.handleUsername(e)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="auto" md={{ size: 'auto', offset: 5 }}>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password" onChange={e => this.handlePassword(e)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="auto" md={{ size: 'auto', offset: 5 }}>
                            <Button type="submit" color="primary">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}