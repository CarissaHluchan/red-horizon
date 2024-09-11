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

  const photo = allPhotoData.find(photo => photo.id === id);

  const handleFavoriteClick = () => {
    if (photo) {
      handleAddToFavorites(photo);
    }
  }

  if (!photo) {
    return <div>
      Media not found.
      <Link to="/AllMarsMedia">
        Back to All Mars Media
      </Link>
    </div>;
  }

  return (
    <div className='single-media-detail-wrapper'>
      <div className='slingle-media-back-button-wrapper'>
        <Link
          to='/allMarsMedia'
          className='slingle-media-back-button'>
          Back to All Mars Media
        </Link>
      </div>
      <div className='single-media-wrapper'>
        <div className='single-media-title-button-wrapper'>
          <div className='single-media-title'>
            {photo.title}
          </div>
          <div className='single-media-all-button-wrapper'>
            <div className='radio-button-parent'>
              <label
                className='radio-button-label'>
                Add to favorites
              </label>
              <input
                type="radio"
                className='favorite-radio-button'
                onChange={handleFavoriteClick}
              />
            </div>
            <Link
              to='/favorites'
              className='see-favorites'>
              See Favorites
            </Link>
          </div>
        </div>
        <div className='single-media-main-image-wrapper'>
          <img
            className='single-media-main-image'
            src={photo.img_src}
            alt={photo.description}
          />
        </div>
        <div className='single-media-date-wrapper'>
          <div
            className='single-media-date-label'>
            Date Created:
          </div>
          <div className='single-media-date'>
            {photo.date_created}
          </div>
        </div>
        <div className='single-media-description-wrapper'>
          <div
            className='single-media-description-label'>
            Description:
          </div>
          <p className='single-media-description'>
            {photo.description}
          </p>
        </div>
      </div>
    </div>
  );
}


export default SingleMediaDetails;