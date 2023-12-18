import React from 'react';
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    props.loggedIn ? (<Component {...props} />) : <Navigate to="/" replace />
  )
};

export const UnProtectedRoute =({ component: Component, ...props }) => {
  return (
    props.loggedIn === false ? (<Component {...props} />) : <Navigate to="/" replace />
  )
}