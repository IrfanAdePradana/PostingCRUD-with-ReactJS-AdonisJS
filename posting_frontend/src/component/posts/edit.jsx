import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Col, Form, Input, Container, Label, Nav, Navbar, NavItem, NavLink } from 'reactstrap';

export default class edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            judul: '',
            isi: ''
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleJudul = this.handleJudul.bind(this)
        this.handleIsi = this.handleIsi.bind(this)
    }
    handleJudul(event) {
        this.setState({ ...this.state, judul: event.target.value });
    }
    handleIsi(event) {
        this.setState({ ...this.state, isi: event.target.value });
    }

    async handleEdit(event) {
        event.preventDefault();
        const data = {
            judul: this.state.judul,
            isi: this.state.isi
        }
        try {
            await axios.put("http://127.0.0.1:3333/api/post/" + window.location.pathname.split('/')[3], data)
            this.props.history.push('/')
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <Container>
                <Col sm="12" md={{ size: 'auto', offset: 1 }}>
                    <Navbar color="light" light expand="md">
                        <Link to="/" className="navbar-brand">PostCRUD</Link>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/posts/" className="nav-link">Post</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/posts/Add" className="nav-link">Add Post</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <hr></hr>
                    <p>Edit Posting</p>
                    <hr></hr>
                    <Form onSubmit={this.handleEdit}>
                        <Label for="judul">Judul</Label>
                        <Input type="text" name="judul" id="judul" onChange={this.handleJudul}></Input>
                        <Label for="isi">Isi</Label>
                        <Input type="textarea" name="isi" id="isi" onChange={this.handleIsi}></Input>
                        <br></br>
                        <Button type="submit" color="primary">Tambah</Button>
                    </Form>
                </Col>
            </Container>
        );
    }
}