import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import {
  allMars,
  deimos,
  phobos,
  polarIceCaps,
  rovers,
  olympusMons,
  ascraeusMons,
  pavonisMons,
  arsiaMons,
  vallesMarineris,
  argyrePlanitia,
  candorChasma,
  aresVallis
} from '../APICalls/APICalls';
import LandingPage from '../LandingPage/LandingPage';
import DynamicMedia from '../DynamicMedia/DynamicMedia'
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
};

export type MarsDataType = 'deimos' | 'phobos' | 'polarIceCaps' | 'rovers' | 'olympusMons' | 'ascraeusMons' | 'pavonisMons' | 'arsiaMons' | 'vallesMarineris' | 'argyrePlanitia' | 'candorChasma' | 'aresVallis' | 'allMars' | '';

function App() {
  const [marsData, setMarsData] = useState<Record<string, Photo[]>>({});
  const [userClick, setUserClick] = useState<MarsDataType>('');
  const [favorites, setFavorites] = useState<Photo[]>([]);

  const [id, setId] = useState<string>('');

  const navigate = useNavigate();
  const mediaRef = useRef<HTMLDivElement | null>(null);

  const selectedPhoto = marsData[userClick]?.find(photo => photo.id === id);

  const handleClick = (aPhoto: Photo) => {
    setId(aPhoto.id);
  };

  const fetchData = async (query: string, fetchFunction: () => Promise<Photo[]>) => {
    try {
      const data = await fetchFunction();
      setMarsData(prevData => ({
        ...prevData,
        [query]: data
      }));
    } catch (error) {
      console.error(`Error fetching ${query} data:`, error);
      navigate(`/error/500`, {
        state: { message: `An unexpected error occurred.` }
      });
    };
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await fetchData('allMars', allMars);
      await fetchData('rovers', rovers);
      await fetchData('phobos', phobos);
      await fetchData('deimos', deimos);
      await fetchData('polarIceCaps', polarIceCaps);
      await fetchData('olympusMons', olympusMons);
      await fetchData('ascraeusMons', ascraeusMons);
      await fetchData('pavonisMons', pavonisMons);
      await fetchData('arsiaMons', arsiaMons);
      await fetchData('vallesMarineris', vallesMarineris);
      await fetchData('argyrePlanitia', argyrePlanitia);
      await fetchData('candorChasma', candorChasma);
      await fetchData('aresVallis', aresVallis);
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (mediaRef.current) {
      mediaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [userClick, id]);

  const handleAddToFavorites = (photoItem: Photo) => {
    setFavorites(prevFavorites =>
      [...prevFavorites, photoItem]
    );
  };
  
  const handleRemoveFromFavorites = (favoriteToRemove: Photo) => {
    setFavorites(prevFavorites => prevFavorites.filter(favoritePhoto => favoritePhoto.id !== favoriteToRemove.id))
  };

  return (
    <>
      <LandingPage handleClick={setUserClick} />
      <Routes>

        <Route path="/"
          element={
            <DynamicMedia
              data={marsData["allMars"] || []}
              handleAddToFavorites={handleAddToFavorites}
              handleClick={handleClick}
              title={'allMars'}
            />} />
        <Route path="/media/:id"
          element={selectedPhoto ? (
            <SingleMediaDetails
              allPhotoData={marsData[userClick] || []}
              data={selectedPhoto}
              userHasClicked={userClick}
              handleAddToFavorites={handleAddToFavorites}
            />
          ) : (
            <ErrorPage error="Media not found" />
          )} />
        <Route path='/mars/:media' element={
          <div ref={mediaRef}>
            <DynamicMedia data={marsData[userClick] || []} title="Mars Media" handleAddToFavorites={handleAddToFavorites} handleClick={handleClick} />
          </div>
        } />
        <Route path='/favorites' element={<Favorites favorites={favorites} handleRemoveFromFavorites={handleRemoveFromFavorites} handleClick={handleClick} />} />
        <Route path='/error/:code' element={<ErrorPage error="Invalid URL" />} />
        <Route path='*' element={<ErrorPage error="404 - Page Not Found" />} />
      </Routes>
    </>
  );
}

export default App;