// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
// };

// export default PrivateRoute;

import React from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  // Check if the user is authenticated (e.g., by checking if user data is present)
  const isAuthenticated = !!localStorage.getItem('userData');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;