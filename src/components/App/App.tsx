
import './App.css'
import { rovers } from '../APICalls/APICalls';
import AllMedia from '../AllMedia/AllMedia';
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [reoverData, setRoverData] = useState([])

  useEffect(() => {
    let data = rovers()
    setRoverData(data)
    console.log(data, '<-- HERE FOR ROVERS')
  }, [])


  return (
    <>
      <div>Hello World!</div>
      <Routes>
        <Route path='/mars' element={<AllMedia />}></Route>
        <Route path='/mars/:id' element={<SingleMediaDetails />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/error/:code' element={<ErrorPage />}></Route>
        <Route path='*' element={<ErrorPage error={404} />}></Route>
      </Routes>
    </>
  )
}

export default App;
