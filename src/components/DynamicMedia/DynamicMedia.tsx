import SingleMediaDetails from '../SingleMediaDetails/SingleMediaDetails';
import './DynamicMedia.css';
import { Link } from 'react-router-dom';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface DynamicMediaProps {
  data: Photo[];
  handleAddToFavorites: (photo: Photo) => void;
}

function DynamicMedia({ data, handleAddToFavorites }: DynamicMediaProps) {
  return (
    <section className='media-section'>
      <Link to='/favorites' className='favorites-button'>See Favorites</Link>
      <div className='media-gallery'>
        {data.map(photo => (
          <div key={photo.id} className='media-item'>
            <Link to={`/media/${photo.id}`}>
              <img className='single-thumbnail' src={photo.img_src} alt={photo.title} />
            </Link>
            <div className='favorites-radio-button-parent'>
              <label>Add to favorites</label>
              <input 
              type='radio' 
              className='radio-button'
              onChange={() => handleAddToFavorites(photo)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DynamicMedia;