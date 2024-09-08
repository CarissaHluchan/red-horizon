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
import DynamicMedia from '../DynamicMedia/DynamicMedia'
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

function App() {
  // State to hold data for all queries
  const [marsData, setMarsData] = useState<Record<string, Photo[]>>({});

  // const [allMarsData, setAllMarsData] = useState<Photo[]>([]);


  const fetchData = async (query: string, fetchFunction: () => Promise<Photo[]>) => {
    try {
      const data = await fetchFunction();
      setMarsData(prevData => ({
        ...prevData,
        [query]: data
      }));
      console.log(data, `${query} Data`);
    } catch (error) {
      console.log(`Error fetching ${query} data:`, error);
    }
  };

  useEffect(() => {
    fetchData('allMars', allMars);
    fetchData('rovers', rovers);
    fetchData('phobos', phobos);
    fetchData('deimos', deimos);
    fetchData('polarIceCaps', polarIceCaps);
    fetchData('olmpusMons', olmpusMons);
    fetchData('ascraeusMons', ascraeusMons);
    fetchData('pavonisMons', pavonisMons);
    fetchData('arsiaMons', arsiaMons);
    fetchData('vallesMarineris', vallesMarineris);
    fetchData('argyrePlanitia', argyrePlanitia);
    fetchData('candorChasma', candorChasma);
    fetchData('aresVallis', aresVallis);
  }, []);

  // Get the query parameter from the route
  const { media } = useParams<{ media: string }>();

  return (
    <>
      <LandingPage />
      <Routes>
        <Route path='/AllMarsMedia' element={<AllMarsMedia allMarsData={marsData.allMars || []} />} />
        <Route path='/mars/:media' element={<DynamicMedia data={marsData[media || ''] || []} title="Mars Media" />} />
        <Route path='/mars/:id' element={<SingleMediaDetails />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/error/:code' element={<ErrorPage error="Invalid URL" />} />
        <Route path='*' element={<ErrorPage error={404} />} />
      </Routes>
    </>
  );
}

export default App;