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
  userHasClicked: String | null;
  handleAddToFavorites: (photo: Photo) => void;
}

function SingleMediaDetails({ userHasClicked, allPhotoData, handleAddToFavorites }: SingleMediaDetailsProps) {

  const { id } = useParams<{ id: string }>();

  const photo = allPhotoData.find(photo => photo.id === id);

  console.log(id, '<-- CHECK ID IN SINGLE MEDIA')
  console.log(allPhotoData, '<-- CHECK ALL PHOTO DATA IN SINGLE MEDIA')

  const handleFavoriteClick = () => {
    if (photo) {
      handleAddToFavorites(photo);
    }
  }

  // const handleFavoriteClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (photo && event.target.checked) {
  //     handleAddToFavorites(photo);
  //   }
  // };

  if (!photo) {
    return <div>
      Media not found.
      <Link to="/mars">
        Back to All Mars Media
      </Link>
    </div>;
  }

  return (
    <div className='single-media-detail-wrapper'>
      <div className='single-media-back-button-wrapper'>
        {/* <Link to='/mars/allMars' className='single-media-back-button'>Back to All Mars Media</Link> */}
        {/* <Link to={`/mars/${userHasClicked}`} className='single-media-back-button'>Back to {`${userHasClicked}`} Media</Link> */}
        <Link to={`/mars/${userHasClicked}`} className='single-media-back-button'>Back</Link>
      </div>
      <div className='single-media-wrapper'>
        <div className='single-media-title-button-wrapper'>
          <div className='single-media-title'>{photo.title}</div>
          <div className='single-media-all-button-wrapper'>
            <label className='radio-button-label'>
              Add to favorites
              <input
                type="radio"
                className='favorite-radio-button'
                onChange={handleFavoriteClick}
              />
            </label>
            <Link to='/favorites' className='see-favorites-button'>See Favorites</Link>
          </div>
        </div>
        <div className='single-media-main-image-wrapper'>
          <img className='single-media-main-image' src={photo.img_src} alt={photo.description} />
        </div>
        <div className='single-media-date-wrapper'>
          <div className='single-media-date-label'>Date Created:</div>
          <div className='single-media-date'>{photo.date_created}</div>
        </div>
        <div className='single-media-description-wrapper'>
          <div className='single-media-description-label'>Description:</div>
          <p className='single-media-description'>{photo.description}</p>
        </div>
      </div>
    </div>
  );
}


export default SingleMediaDetails;