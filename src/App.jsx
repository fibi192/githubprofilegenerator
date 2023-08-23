// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import UserProfile from './Components/UserProfile';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = (username) => {
    // Make API request to GitHub to fetch user data
    axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
        setUser(null);
      });
  };

  return (
    <div>
      <h1>GitHub Profile Generator</h1>
      <SearchForm onSearch={handleSearch} />
      {user && <UserProfile user={user} />}
    </div>
  );
};

export default App;
