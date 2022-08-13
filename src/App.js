import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/data' element={<Data />}>Data</Route>
          <Route path='*' element={<h4>Page Not Found!</h4>} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
