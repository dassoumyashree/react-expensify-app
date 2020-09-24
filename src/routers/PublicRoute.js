import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// setting up the route is handled by PrivateRoute

export const PublicRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
    // rest of the props so that they correctly get down to Route
}) => {
    console.log('comp', Component)
   return (
    <Route {...rest} component={(props) => {
        return (
        isAuthenticated ? (
                <Redirect to="/dashboard" />                          
        ) : (
            <Component {...props} />
        )
    )}}/>

)};


// to figure out values whether the user is authenticated or not
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

// connected version for consumption
export default connect(mapStateToProps)(PublicRoute);