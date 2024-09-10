import './SingleMediaDetails.css';
import { Link } from 'react-router-dom';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface SingleMediaDetailsProps {
  data: Photo;
  handleAddToFavorites: (photo: Photo) => void;
}

function SingleMediaDetails({ data, handleAddToFavorites }: SingleMediaDetailsProps) {

  const handleFavoriteClick = () => {
    handleAddToFavorites(data);
  }

  return (
    <div className='single-media-detail-wrapper'>
      <Link to='/allMarsMedia' className='slingle-media-back-button'>Back to All Mars Media</Link>
      <div className='single-media-title'>{data.title}</div>
      <img className='single-media-main-image' src={data.img_src} alt={data.description} />
      <p className='single-media-description'>{data.description}</p>
      <div className='single-media-date'>{data.date_created}</div>
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