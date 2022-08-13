import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <ul>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/date">Date</Link></li>
            <li><Link to="/accueil">Accueil</Link></li>
          </ul> */}
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/data' element={<Data />}>Data</Route>
          <Route path='*' element={<h4>Page Not Found!</h4>} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
