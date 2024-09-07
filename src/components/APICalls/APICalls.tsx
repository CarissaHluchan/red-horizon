// export function testFeach() {
//     return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=1995-06-16`)
//         .then(response => response.json())
//         .then(data => console.log(data, '<-- HERE'))
//         .catch(err => console.log(err))
// }

const apiKey = import.meta.env.VITE_API_KEY

export const rovers = async () => {
    try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&sol=1000`)
        if (!response.ok) {
            throw new Error('There was a error displaying rovers media.')
        }
        const nasaData = await response.json()
        console.log(nasaData.photos)
        return nasaData.photos
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
    // console.log(nasaData)
}

// export const rovers = async () => {
//     let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&sol=1000`)
//     let nasaDataFetched = await fetchNasaData.json()
//     let nasaData = nasaDataFetched
//     // console.log(nasaData)
//     return nasaData.photos
// }


export const AllMars = async () => {
    try {
        const response = await fetch(``)
        if(!response.ok) {
            throw new Error('There was a error displaying rovers media.')
        }
        const nasaData = await response.json

    }

};

export const OallMars = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const phobos = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const deimos = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const polarIceCaps = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const olympusMons = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const ascraeusMons = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const pavonisMons = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const arisaMons = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const vallesMarineris = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const argyrePlanitia = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const candorChasma = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}

export const aresVallis = async () => {
    let fetchNasaData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/`)
    let nasaDataFetched = await fetchNasaData.json()
    let nasaData = nasaDataFetched
    // console.log(nasaData)
    return nasaData
}


// GET /search?q={q}
// GET /asset/{nasa_id}

/**
const apiKey = import.meta.env.VITE_API_KEY

function ApiCalls() {

  // let getNasaData = async () => {
  //     let fetchNasaStuff = await fetch(`https://images-api.nasa.gov/search?q=mars`)
  //     let nasaStuffFetched = await fetchNasaStuff.json()
  //     let nasaStuff = nasaStuffFetched.collection.items
  //     console.log(nasaStuff)
  //     return nasaStuff
  //   };

  // console.log(apiKey, "<-- API KEY")

  // This call is to the mars rover photos end point. This link grabs all the pictures sorted by 'sol day'.
  // There are other based off Earth day, rover, and type of camera. will pull alot from here. 
  // |
  // |
  // V

  let getNasaData = async () => {
    let fetchNasaStuff = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&sol=1000`)
    let nasaStuffFetched = await fetchNasaStuff.json()
    let nasaStuff = nasaStuffFetched
    console.log(nasaStuff)
    return nasaStuff
  };

  // console.log(getNasaData(), '<-- HERE')
  



  return (
    <h1>This will be something...</h1>
  )
}

export default ApiCalls;
*/