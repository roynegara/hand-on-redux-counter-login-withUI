import {useSelector} from 'react-redux'
import classes from './Header.module.css'

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  console.log('header', isLoggedIn)

  return (
    <header className={classes.header}>
      <h1>Dibimbing Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header

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
