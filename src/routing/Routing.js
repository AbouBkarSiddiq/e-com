import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Login from '../components/login/Login';
import AllUsers from '../components/users/AllUsers';
import Register from '../components/register/Register'

const Routing = () => {
    const PrivateRoute = ({ component: Component, ...rest }) => {
        let userId = localStorage.getItem('userId');
        if (userId && userId !== '') {
            return <Route  {...rest} render={(props) => (<div className="">
                {/* <Navbar /> */}
                <div className="content"><Component {...props} /></div></div>)} />
        } else {
            return <Redirect to='/' />
        }
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/admin" component={Layout} />
                <PrivateRoute path="/users" component={AllUsers} />
                <PrivateRoute path="/user/:id" component={Layout} />
                {/* <Route path="/create" component={Create} />
                <Route path="/todo/:id" component={TodoDetails} />
                <Route path="/edit-todo/:id" component={EditTodo} />
                <Route path="*" component={NotFound} /> */}
            </Switch>
        </Router>
    );

    }
    


export default Routing
