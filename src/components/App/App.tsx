
import './App.css'
import { rovers } from '../APICalls/APICalls';
import LandingPage from '../LandingPage/LandingPage';
import AllMedia from '../AllMedia/AllMedia';
import DynamicMedia from '../DynamicMeida/DynamicMeida';
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [roverData, setRoverData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await rovers();
        setRoverData(data);
        console.log(data, '<-- API response');
      } catch (error) {
        console.error('Error fetching rover data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <LandingPage />
      <Routes>
        <Route path='/mars' element={<AllMedia />} />
        <Route path='/mars/:media' element={<DynamicMedia />} />
        <Route path='/mars/:id' element={<SingleMediaDetails />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/error/:code' element={<ErrorPage error="Invalid URL" />} />
        <Route path='*' element={<ErrorPage error={404} />} />
      </Routes>
    </>
  )
}

export default App;
