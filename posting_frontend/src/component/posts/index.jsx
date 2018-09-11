import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Nav, Navbar, NavItem, Table } from 'reactstrap';

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: []
        }
    }
    async componentDidMount() {
        try {
            const post = await axios.get('http://127.0.0.1:3333/api/post')
            this.setState({ post: post.data })
        } catch (event) {
            console.log("data gagal diambil");
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
                                <Link to="/posts/" className="nav-link">Post</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/posts/Add" className="nav-link">Add Post</Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <hr></hr>
                    <p>Posting</p>
                    <Table bordered>
                        <tbody>
                            {this.state.post.map((p, i) => (
                                <tr key={i}>
                                    <td><Link to={"/posts/detail/" + p.id}>{p.judul}</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col >
            </Container >
        );
    }
}