import { useDispatch, useSelector } from "react-redux";
import {logout} from "../features/authSlice";
import classes from "./Header.module.css";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
 

  console.log("header", isLoggedIn);

  const logoutHandler = () => {
    dispatch(logout());
  }
 
  console.log('logoutheader', {logoutHandler})

  return (
    <header className={classes.header}>
      <h1>Dibimbing Redux Auth</h1>
      {isLoggedIn &&  (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler} >Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

// import classes from './Header.module.css'

// const Header = () => {
//   const isAuth = false

//   console.log('isAuth', isAuth)

//   return (
//     <header className={classes.header}>
//       <h1>Dibimbing Redux Auth</h1>
//       {isAuth && (
//         <nav>
//           <ul>
//             <li>
//               <a href="/">My Products</a>
//             </li>
//             <li>
//               <a href="/">My Sales</a>
//             </li>
//             <li>
//               <button>Logout</button>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   )
// }

// export default Header
