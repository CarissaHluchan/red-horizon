
import './App.css'
import APICalls from './APICalls/ApiCalls';
import { rovers } from '../APICalls/APICalls';
import AllMedia from '../AllMedia/AllMedia';
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  let roverData = rovers()

  console.log(roverData)

  return (
    <Routes>
      <Route path='/' element={ <App /> }></Route> // I think it's just app???
      <Route path='/mars' element={<AllMedia />}></Route>
      <Route path='/mars/:id' element={<SingleMediaDetails />}></Route>
      <Route path='/favorites' element={<Favorites />}></Route>
      <Route path='/error/:code' element={<ErrorPage />}></Route>
      <Route path='*' element={<ErrorPage error={404} />}></Route>
    </Routes>
  )
}

export default App;
