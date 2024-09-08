import './App.css';
import { 
  fetchMarsData,
  allMars, 
  deimos, 
  phobos,
  polarIceCaps,
  rovers,
  olmpusMons,
  ascraeusMons,
  pavonisMons,
  arsiaMons,
  vallesMarineris,
  argyrePlanitia,
  candorChasma,
  aresVallis
} from '../APICalls/APICalls';
import LandingPage from '../LandingPage/LandingPage';
import AllMarsMedia from '../AllMarsMedia/AllMarsMedia';
import DynamicMeida from '../DynamicMeida/DynamicMeida';
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [allMarsData, setAllMarsData] = useState<any[]>([]);
  const [roverData, setRoverData] = useState<any[]>([]);

  const fetchData = async (query: string, setter: React.Dispatch<React.SetStateAction<any[]>>) => {
    try {
      const data = await fetchMarsData(query);
      setter(data);
      console.log(data, `${query} Data`);
    } catch (error) {
      console.log(`Error fetching ${query} data:`, error);
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
        <Route path='/mars/:media' element={<DynamicMeida />} />
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
