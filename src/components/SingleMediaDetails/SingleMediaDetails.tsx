import './SingleMediaDetails.css';
import { useParams, Link } from 'react-router-dom';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface SingleMediaDetailsProps {
  allPhotoData: Photo[];
  data: Photo | null;
  handleAddToFavorites: (photo: Photo) => void;
}

function SingleMediaDetails({ allPhotoData, data, handleAddToFavorites }: SingleMediaDetailsProps) {

  const { id } = useParams<{ id: string }>();
  
  // console.log(data, '<-- FROM SINGLE MEDIA')
  
  const photo = allPhotoData.find(photo => photo.id === id);
  
  const handleFavoriteClick = () => {
    if (photo) {
      console.log(photo, '<-- FROM FAVORITE CLICK IN SINGLE MEDIA');
      handleAddToFavorites(photo);
    }
  }

  if (!photo) {
    return <div>Media not found. <Link to="/AllMarsMedia">Back to All Mars Media</Link></div>;
  }

  return (
    <div className='single-media-detail-wrapper'>
      <Link to='/allMarsMedia' className='slingle-media-back-button'>Back to All Mars Media</Link>
      <div className='single-media-title'>{photo.title}</div>
      <img className='single-media-main-image' src={photo.img_src} alt={photo.description} />
      <p className='single-media-description'>{photo.description}</p>
      <div className='single-media-date'>{photo.date_created}</div>
      <div className='radio-button-parent'>
        <label>Add to favorites</label>
        <input
          type="radio"
          className='favorite-radio-button'
          onChange={handleFavoriteClick}
        />
      </div>
      <Link to='/favorites' className='see-favorites'>See Favorites</Link>
    </div>
  );
}


export default SingleMediaDetails;