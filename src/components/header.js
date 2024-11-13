// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   debugger;
//   return (
//     <header style={styles.header}>
//       <h1 style={styles.title}>My App</h1>
//       <nav style={styles.nav}>
//         <Link to="/registrationForm" style={styles.link}>Register</Link>
//         <Link to="/login" style={styles.link}>Login</Link>
//         {/* <Link to="/loginBootstrap" style={styles.link}>LoginBootstrap</Link> */}
//         <Link to="/listdata" style={styles.link}>ListData</Link>
//         <Link to="/test" style={styles.link}>Test</Link>
//         {/* <Link to="/contactus" style={styles.link}>Contact</Link> */}
//         {/* <Link to="/loginModalPopup" style={styles.link}>LoginModalPopup</Link> */}

//       </nav>
//     </header>
//   );
// };

// const styles = {
//   header: {
//     backgroundColor: '#282c34',
//     padding: '10px',
//     color: 'white',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',  // Ensures it stretches across the screen
//     position: 'fixed',  // Makes it stay at the top on scroll
//     top: 0,  // Anchors the header to the top
//     left: 0,  // Anchors the header to the left
//     zIndex: 1000, // Ensures the header stays above the content
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'  // Optional: Adds a shadow effect
//   },
//   title: {
//     margin: 0,
//   },
//   nav: {
//     display: 'flex',
//     gap: '20px',
//   },
//   link: {
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '16px',
//   },
// };

// // Make sure to add top padding to the content below the header
// // const stylesForPageContent = {
// //   paddingTop: '70px', // Adjust based on the header height (50px height + 20px gap)
// // };

// // // Example page content wrapper
// // const PageContent = () => {
// //   return (
// //     <div style={stylesForPageContent}>
// //       {/* Your page content here */}
// //     </div>
// //   );
// // };


// export default Header;

//------------------------------------------------------
import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My App</h1>
      <nav style={styles.nav}>
        <NavLink 
          to="/registrationForm" 
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Register
        </NavLink>
        <NavLink 
          to="/login" 
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Login
        </NavLink>
        <NavLink 
          to="/listdata" 
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          ListData
        </NavLink>
        <NavLink 
          to="/test" 
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Test
        </NavLink>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
  activeLink: {
    fontWeight: 'bold',
    color: 'yellow',  // You can change this color to anything
    borderBottom: '2px solid white',  // Adds underline effect to the active link
  },
};

export default header;
