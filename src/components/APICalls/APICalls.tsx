
const apiKey = import.meta.env.VITE_API_KEY

interface Link {
  href: string;
  rel: string;
  render: string;
}

interface PhotoData {
  description: string;
  title: string;
  photographer: string;
  location: string;
  nasa_id: string;
  date_created: string;
  keywords: string[];
  media_type: string;
  center: string;
}

interface PhotoItem {
  href: string;
  data: PhotoData[];
  links: Link[];
}

interface AllMarsResponse {
  collection: {
    version: string;
    href: string;
    items: PhotoItem[];
  };
}

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface phobosResponse {
  collection: {
    version: string;
    href: string;
    items: PhotoItem[];
  };
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// Dynamic code //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const fetchMarsData = async (query: string): Promise<Photo[]> => {
    try {                       
      const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image&year_start=1920&year_end=2024&page_size=1000`);
      if (!response.ok) {
        throw new Error(`There was an error displaying media for ${query}.`);
      }
      const data: AllMarsResponse = await response.json();
  
      // Filter and map the API data to the desired format
      const photos: Photo[] = data.collection.items
        .filter(item => item.data.length > 0 && item.data[0].nasa_id.includes('PIA'))
        .map(item => ({
          id: item.data[0].nasa_id,
          img_src: item.links[0].href,
          description: item.data[0].description,
          title: item.data[0].title,
          date_created: item.data[0].date_created
        }));
  
      // console.log(photos);
      return photos;
    } catch (error) {
      console.log(`Error fetching data for ${query}:`, error);
      throw error;
    }
  };
  
  // Different queries
  export const allMars = () => fetchMarsData('mars');
  export const deimos = () => fetchMarsData('deimos');
  export const phobos = () => fetchMarsData('phobos');
  export const polarIceCaps = () => fetchMarsData('polar-Ice-Caps');
  export const rovers = () => fetchMarsData('rovers');
  export const olympusMons = () => fetchMarsData('olympus-Mons');
  export const ascraeusMons = () => fetchMarsData('ascraeus-Mons');
  export const pavonisMons = () => fetchMarsData('pavonis-Mons');
  export const arsiaMons = () => fetchMarsData('arsia-Mons');
  export const vallesMarineris = () => fetchMarsData('valles-Marineris');
  export const argyrePlanitia = () => fetchMarsData('argyre-Planitia');
  export const candorChasma = () => fetchMarsData('candor-Chasma');
  export const aresVallis = () => fetchMarsData('ares-Vallis');
  