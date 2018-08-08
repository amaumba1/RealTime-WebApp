// import React from 'react';
// import { Link } from 'react-router-dom';

// import SignOutButton from './SignOut'
// import * as routes from '../constants/routes';

// const Navigation = ({ authUser }) =>
//     <div>
//         {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
//     </div>

//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand"><Link to={routes.HOME}>Home</Link></a>

//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link"><Link to={routes.LANDING}>Landing</Link><span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link"><Link to={routes.ACCOUNT}>Account</Link>Link</a>
//                 </li>


//             </ul>
//             <form className="form-inline my-2 my-lg-0">
//                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     <SignOutButton />

//     </form>
//   </div>
// </nav>


//         const NavigationAuth = () =>
//     <div>
//             <ul className="nav justify-content-end">
//                 <li className="nav-item"><Link to={routes.LANDING}>Landing</Link></li>
//                 <li className="nav-item"><Link to={routes.HOME}>Home</Link></li>
//                 <li className="nav-item"><Link to={routes.ACCOUNT}>Account</Link></li>
//                 <li className="nav-item"><SignOutButton /></li>
//             </ul>
//         </div>


//         const NavigationNonAuth = () =>
//         <ul className="nav justify-content-end">
//             <li className="nav-item"><Link to={routes.LANDING}>Landing</Link></li>
//             <li className="nav-item"><Link to={routes.SIGN_IN}>Sign In</Link></li>
//         </ul>


//         export default Navigation; 