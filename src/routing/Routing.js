import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Admin from '../components/admin/Admin';
import AddCategory from '../components/category/AddCategory';
import AllCategories from '../components/category/AllCategories';
import EditCategory from '../components/category/EditCategory';
import AllProducts from '../components/product/AllProducts';
import AddProduct from '../components/product/AddProduct';
import EditProduct from '../components/product/EditProduct'
import Layout from '../components/layout/Layout';
import Login from '../components/login/Login';
import Register from '../components/register/Register'
import AllUsers from '../components/users/AllUsers';

const Routing = () => {
    const PrivateRoute = ({ component: Component, ...rest }) => {
        let userId = localStorage.getItem('userId');
        if (userId && userId !== '') {
            return <Route  {...rest} render={(props) => (<div className="">
                {/* <Layout /> */}
                <div className="content"><Component {...props} /></div></div>)} />
        } else {
            return <Redirect to='/' />
        }
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Layout>
                <PrivateRoute path="/admin" component={Admin} />
                <PrivateRoute path="/all-users" component={AllUsers} />
                <PrivateRoute path="/add-user" component={Register} />
                {/* <PrivateRoute path="/user/:id" component={AllUsers} /> */}
                <PrivateRoute path="/add-category" component={AddCategory} />
                <PrivateRoute path="/category/:id" component={EditCategory} />
                <PrivateRoute path="/add-product" component={AddProduct} />
                <PrivateRoute path="/all-categories" component={AllCategories} />
                <PrivateRoute path="/all-products" component={AllProducts} />
                <PrivateRoute path="/product/:id" component={EditProduct} />
                </Layout>
            </Switch>
        </Router>
    );

    }
export default Routing

// import React from 'react'
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Admin from '../components/admin/Admin';
// import Layout from '../components/layout/Layout';
// import Login from '../components/login/Login';
// import Register from '../components/register/Register'
// import AllUsers from '../components/users/AllUsers';

// const Routing = () => {
//     let userId = localStorage.getItem('userId');
//     // const PrivateRoute = ({ component: Component, ...rest }) => {
//     //     if (userId && userId !== '') {
//     //         return <Route  {...rest} render={(props) => (<div className="">
//     //             {/* <Layout /> */}
//     //             <div className="content"><Component {...props} /></div></div>)} />
//     //     } else {
//     //         return <Redirect to='/' />
//     //     }
//     // }

//     return (
//         <Router>
//             {
//                 (userId && userId !== '') ? (<div>
//                         {/* <Layout /> */}
//                         <div>
//                             <Switch>
//                                 <Route exact path="/" component={Login} />
//                                 <Route path="/admin" component={Admin} />
//                                 <Route path="/all-users" component={AllUsers} />
//                                 <Route path="/add-user" component={Register} />
//                                 <Route path="/user/:id" component={Layout} />
//                             </Switch>
//                         </div>
//                     </div>
//                 ): (<div>
//                         <Switch>
//                             <Route exact path="/" component={Login} />
//                          </Switch>
//                     </div>
//                 )
//             }
//         </Router>
//     );
// }

// export default Routing
