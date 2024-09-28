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
import AllMarsMedia from '../AllMarsMedia/AllMarsMedia';
import DynamicMedia from '../DynamicMedia/DynamicMedia'
import Favorites from '../Favorites/Favorites';
import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

export type MarsDataType = 'deimos' | 'phobos' | 'polarIceCaps' | 'rovers' | 'olympusMons' | 'ascraeusMons' | 'pavonisMons' | 'arsiaMons' | 'vallesMarineris' | 'argyrePlanitia' | 'candorChasma' | 'aresVallis' | '';

function App() {
  const [marsData, setMarsData] = useState<Record<string, Photo[]>>({});
  const [userClick, setUserClick] = useState<MarsDataType>('');
  const [favorites, setFavorites] = useState<Photo[]>([]);
  const navigate = useNavigate();
  const mediaRef = useRef<HTMLDivElement | null>(null);;

  const { id } = useParams<{ id: string }>();

  const selectedPhoto = marsData[userClick]?.find(photo => photo.id === id);

  const handleAddToFavorites = (photoItem: Photo) => {
    setFavorites(prevFavorites =>
      [...prevFavorites, photoItem]
    );
  }

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
    }
  }

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
  }, [navigate]);

  // useEffect to scroll to the media section when userClick or id changes
  useEffect(() => {
    if (mediaRef.current) {
      mediaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [userClick, id]); // Trigger when the route or selected media changes

  return (
    <>
      <LandingPage handleClick={setUserClick} />
      <Routes>

        <Route path="/"
          element={
            <AllMarsMedia
              allMarsData={marsData['allMars'] || []}
              handleAddToFavorites={handleAddToFavorites} />} />
        <Route path="/AllMarsMedia"
          element={
            <div ref={mediaRef}>
              <AllMarsMedia allMarsData={marsData['allMars'] || []} handleAddToFavorites={handleAddToFavorites} />
            </div>} />
        <Route path="/media/:id"
          element={selectedPhoto ? (
            <SingleMediaDetails
              allPhotoData={marsData[userClick] || []}
              data={selectedPhoto}
              handleAddToFavorites={handleAddToFavorites}
            />
          ) : (
            <ErrorPage error="Media not found" />
          )} />
        <Route path='/mars/:media' element={
          <div ref={mediaRef}>
            <DynamicMedia data={marsData[userClick] || []} title="Mars Media" handleAddToFavorites={handleAddToFavorites} />
          </div>
        } />
        <Route path='/favorites' element={<Favorites favorites={favorites} />} />
        <Route path='/error/:code' element={<ErrorPage error="Invalid URL" />} />
        <Route path='*' element={<ErrorPage error={404} />} />


        {/* <Route path="/" element={<AllMarsMedia
          allMarsData={marsData['allMars'] || []}
          handleAddToFavorites={handleAddToFavorites} />}
        />
        <Route path="/AllMarsMedia" element={<AllMarsMedia
          allMarsData={marsData['allMars'] || []}
          handleAddToFavorites={handleAddToFavorites} />}
        />
        <Route path="/AllMarsMedia/:id" element={<SingleMediaDetails
          allPhotoData={marsData['allMars'] || []}
          data={null}
          handleAddToFavorites={handleAddToFavorites} />}
        />
        <Route path='/mars/:media' element={<DynamicMedia
          data={marsData[userClick] || []}
          title="Mars Media"
          handleAddToFavorites={handleAddToFavorites} />}
        />
        <Route path='/media/:id' element={selectedPhoto ? (
          <SingleMediaDetails
            allPhotoData={marsData[userClick] || []}
            data={selectedPhoto}
            handleAddToFavorites={handleAddToFavorites}
          />
        ) : (
          <ErrorPage error="Media not found" />
        )}
        />

        <Route path='/media/:id' element={<SingleMediaDetails
          allPhotoData={marsData[userClick] || []}
          data={null}
          handleAddToFavorites={handleAddToFavorites} />}
        />
        <Route path='/media/:id' element={selectedPhoto ? <SingleMediaDetails
          allPhotoData={marsData[userClick] || []}
          data={selectedPhoto}
          handleAddToFavorites={handleAddToFavorites}
        />
          : <ErrorPage error="Media not found" />
        }
        />
        <Route path='/favorites' element={<Favorites favorites={favorites} />} />
        <Route path='/error/:code' element={<ErrorPage error="Invalid URL" />} />
        <Route path='*' element={<ErrorPage error='404 Not Found' />} /> */}
      </Routes>
    </>
  );
}

export default App;