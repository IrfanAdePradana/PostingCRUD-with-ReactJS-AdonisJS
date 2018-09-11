import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Col, Container, Nav, Navbar, NavItem, NavLink, Table } from 'reactstrap';

export default class detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    async handleDelete() {
        try {
            await axios.delete("http://127.0.0.1:3333/api/post/" + window.location.pathname.split('/')[3])
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
        }
    }
    async componentDidMount() {
        try {
            const post = await axios.get('http://127.0.0.1:3333/api/post/' + window.location.pathname.split('/')[3])
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
                                <NavLink to="/posts/" className="nav-link">Post</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/posts/Add" className="nav-link">Add Post</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <hr></hr>
                    <p>Detail Post</p>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td>
                                    {this.state.post.judul}
                                </td>
                                <td>
                                    {this.state.post.isi}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Link to={"/posts/edit/" + this.state.post.id}><Button type="submit" color="primary">Edit</Button></Link>
                    <Link to={"/"}><Button type="submit" color="primary" onClick={this.handleDelete}>Hapus</Button></Link>
                </Col>
            </Container>
        );
    }
}