// import { useSelector } from "react-redux";
// import NotFound from './not-found'
// import React from 'react'

// const ProtectRoute = ({ children }) => {
//     const auth = useSelector(state => state.authReducer)
//     if ((!auth.authenticate && window.location.pathname === '/other/admin-page') || (!auth.authenticate && window.location.pathname === '/other/products') || (!auth.authenticate && window.location.pathname === '/other/orders') ){
//       return <NotFound/>
//     }
//     return children;
//   };

//   export default ProtectRoute