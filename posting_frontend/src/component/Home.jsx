import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { Col, Container, Nav, Navbar, NavItem, Table } from 'reactstrap';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: []
        }
    }
    async loadData () {
        try {
            const post = await axios.get('http://127.0.0.1:3333/api/post/')
            this.setState({ post: post.data })
        } catch(e) {
            console.log("data gagal diambil")
        }
    }
    async componentDidMount() {
        await this.loadData();
    }
    async componentWillReceiveProps(){
        await this.loadData();
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
                    <p>SELAMAT DATANG DI CRUD</p>
                    <hr></hr>
                    <Table bordered>
                        <tbody>
                            {this.state.post.map((p, i) => (
                                <tr key={i}>
                                    <td>{p.judul}</td>
                                    <td>{p.isi}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </Table>
                </Col>
            </Container>
        );
    }
}