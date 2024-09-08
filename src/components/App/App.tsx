import './App.css';
import { AllMars, rovers } from '../APICalls/APICalls';
import LandingPage from '../LandingPage/LandingPage';
import AllMarsMedia from '../AllMarsMedia/AllMarsMedia';
import DynamicMedia from '../DynamicMeida/DynamicMeida';
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [allMarsData, setAllMarsData] = useState<any[]>([]);
  const [roverData, setRoverData] = useState<any[]>([]);

  const fetchAllMarsData = async () => {
    try {
      const data = await AllMars();
      setAllMarsData(data);
      console.log(data, "All Mars Data");
    } catch (error) {
      console.log('Error fetching Mars data:', error);
    }
  };

  const fetchRoverData = async () => {
    try {
      const data = await rovers();
      setRoverData(data);
      console.log(data, '<-- Updated API response');
    } catch (error) {
      console.error('Error fetching rover data:', error);
    }
  };

  useEffect(() => {
    fetchRoverData();
    fetchAllMarsData();
  }, []);

  return (
    <>
      <LandingPage />
      <Routes>
        <Route path='/AllMarsMedia' element={<AllMarsMedia allMarsData={allMarsData} />} />
        <Route path='/mars/:media' element={<DynamicMedia />} />
        <Route path='/mars/:id' element={<SingleMediaDetails />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/error/:code' element={<ErrorPage error="Invalid URL" />} />
        <Route path='*' element={<ErrorPage error={404} />} />
      </Routes>
      <button onClick={fetchRoverData}>Refresh Data</button> {/* Example button to refresh data */}
    </>
  );
}

export default App;
