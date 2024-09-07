
import './App.css'
import { rovers } from '../APICalls/APICalls';
import AllMedia from '../AllMedia/AllMedia';
import DynamicMedia from '../DynamicMeida/DynamicMeida';
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [reoverData, setRoverData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await rovers();
        setRoverData(data.photos);
        console.log(data, '<-- HERE FOR ROVERS');
      } catch (error) {
        console.error('Error fetching rover data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div>Hello World!</div>
      <Routes>
        <Route path='/mars' element={<AllMedia />} />
        <Route path='/mars/:media' element={<DynamicMedia />} />
        <Route path='/mars/:id' element={<SingleMediaDetails />} />
        <Route path='/favorites' element={<Favorites />} /> 
        <Route path='/error/:code' element={<ErrorPage />} />
        <Route path='*' element={<ErrorPage error={404} />} />
      </Routes>
    </>
  )
}

export default App;
