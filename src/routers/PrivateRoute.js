import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// setting up the route is handled by PrivateRoute

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
    // rest of the props so that they correctly get down to Route
}) => {
    // console.log('from route', {...rest});
    console.log('compo', Component);
   return (
    <Route {...rest} component={(props) => {
        console.log(props)
        // console.log({...rest})
        return (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>           
        ) : (
            <Redirect to="/" />
        )
    )}}/>

)};


// to figure out values whether the user is authenticated or not
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

// connected version for consumption
export default connect(mapStateToProps)(PrivateRoute);