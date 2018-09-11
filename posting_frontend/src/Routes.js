import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Add from './component/posts/Add';
import Edit from './component/posts/edit';
import Detail from './component/posts/detail';
import A from './component/posts/index';
// import Login from './App';


class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/" component={Login} /> */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/posts" component={A} />
                    <Route server_url="http://localhost:3000" path="/posts/add" component={Add} />
                    <Route server_url="http://localhost:3000" path="/posts/detail/:id" component={Detail} />
                    <Route server_url="http://localhost:3000" path="/posts/edit/:id" component={Edit} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;