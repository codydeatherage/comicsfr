import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ComicsInput from './components/ComicsInput'
import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}

        />
        <Route
          exact
          path="/comics"
          element={<ComicsInput />}
        />
      </Routes>
    </Router> /* 
    <div style={{height: '100%', width: '100%', backgroundColor: 'black'}}>
dfgdfg
    </div> */
  );
}
/*TODO FOR CAROUSEL CARDS:
  Writer
  Artist
  Series
  Volume/Issue #
  
*/

export default App;
