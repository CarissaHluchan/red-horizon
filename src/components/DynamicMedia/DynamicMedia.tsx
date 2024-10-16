import { Link } from 'react-router-dom';
import './DynamicMedia.css';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
};

interface DynamicMediaProps {
  title: string;
  data: Photo[];
  handleAddToFavorites: (photo: Photo) => void;
  handleClick: (photo: Photo) => void;
};

function DynamicMedia({ data, handleAddToFavorites, handleClick }: DynamicMediaProps) {
  return (
    <section className='media-section'>
      <Link to='/favorites' className='see-favorites-button'>See Favorites</Link>
      <div className='media-gallery'>
        {data.map(photo => (
          <div key={photo.id} className='media-item' >
            <h3 className='photo-title'>{photo.title}</h3>
            <Link to={`/media/${photo.id}`}>
              <img
                className={`single-thumbnail ${photo.id}`}
                src={photo.img_src}
                alt={photo.title} 
                onClick={() => handleClick(photo)}/>
            </Link>
            <div className='favorites-radio-button-parent'>
              <p id='add-to-favorites-radio-label'>Add to favorites</p>
              <input
                aria-labelledby={'add-to-favorites-radio-label'}
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