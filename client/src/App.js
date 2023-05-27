// import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// // function App() {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     fetch("/api")
// //       .then((response) => response.json())
// //       .then((data) => setData(data.message));
// //     // .catch((error) => console.log(error));
// //   }, []);

// //   return (
// //     <div className="App">
// //       <h1>{message}</h1>
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           {!data ? "Loding..." : data}
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;
