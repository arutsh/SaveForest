import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';



// Import pages
import Dashboard from './pages/Dashboard';
import Locations from './models/Locations/pages/Locations';
import CreateRecord from './models/Reports/pages/NewRecord';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="locations" element={<Locations/>} />
        <Route exact path="records/new" element={<CreateRecord />} />
      </Routes>
    </>
  );
}

export default App;
