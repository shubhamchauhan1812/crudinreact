import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Register from './Register';
// function App() {
//   let name = "Shubham Babu";
//   let l = [1,2,3,4,5];
//   let obj = {
//     "name": "shubham",
//     "age": 5
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>{name}</h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
      <div className="App">
          <header className="App-header">
              <Register />
          </header>
      </div>
  );
}
export default App;
