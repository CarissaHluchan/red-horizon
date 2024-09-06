import React from 'react'; // do we need this?
import './App.css';
import ApiCalls from './ApiCalls/ApiCalls'
// console.log(process.env.REACT_APP_API_KEY, '<-- API KEY');

async function App() {

  // fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=1995-06-16`)
  //   .then(response => response.json())
  //   .then(data => console.log(data, '<-- HERE'))
  //   .catch(err => console.log(err))

  // let nasaStuff = await fetch(`https://images-api.nasa.gov/search?q=mars`)
  //                   .then(response => response.json())
  //                   .then(data => console.log(data.collection.items, '<-- HERE'))
  //                   .catch(err => console.log(err))

  let fetchNasaStuff = await fetch(`https://images-api.nasa.gov/search?q=mars`)
  let nasaStuffFetched = await fetchNasaStuff.json()
  let nasaStuff = nasaStuffFetched.collection.items

  // console.log(nasaStuff, '<-- HERE')

  let finalNasaStuff = []

  for(let i of nasaStuff) {
    console.log(i.data[0].keywords.includes('rover'), 'FOR FINDING KEYWORDS')
    if (i.data[0].keywords.includes('rovers')) {
      console.log(i, 'THIS IS i')
      finalNasaStuff.push(i)
    }
  }

  console.log(finalNasaStuff, '<-- TING')


  return (
    <main>
    </main>
  );
}

export default App;


