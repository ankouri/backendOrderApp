import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./contexts/AuthContext"

export default function PublicRoute({ component: Component, restricted, ...rest }) {
    const { currentUser } = useAuth();

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            currentUser && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    )
}
