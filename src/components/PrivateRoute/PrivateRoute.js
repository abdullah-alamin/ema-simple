import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

function PrivateRoute({children, ...rest}) {
    const [loggedUser, setLoggedUser]= useContext(userContext)
    return (
     <Route
      {...rest}
      render={({ location }) =>
        loggedUser && loggedUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}

export default PrivateRoute
