import './Favorites.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface FavoritesProps {
  favorites: Photo[]
  handleRemoveFromFavorites: (favoriteToRemove: Photo) => void;
  handleClick: (photo: Photo) => void;
}

function Favorites({ favorites, handleRemoveFromFavorites, handleClick }: FavoritesProps) {

  return (
    <section className='favorites-section'>
      <h4 className='favorites-title'>Your Favorites</h4>
      <div className='favorites-actual-line'></div>
      <div className='favorites-media-gallery'>
        {favorites.map(photo => (
          <div key={photo.id} className='favorites-media-item'>
            <h5 className='favorites-media-item-title'>{photo.title}</h5>
            <Link to={`/media/${photo.id}`}>
              <img
                className='favorites-single-thumbnail'
                src={photo.img_src}
                alt={photo.title} 
                onClick={() => handleClick(photo)}
                />
            </Link>
            <div className='favorites-media-item-date'>
              <div className='favorites-date-taken-label'>DATE TAKEN:</div>
              <span className='favorites-date-taken' >{moment(photo.date_created).format('dddd, MMMM D YYYY, h:mm:ss a')}</span>
            </div>
            <button onClick={() => handleRemoveFromFavorites(photo)} className='favorites-remove-button'>Remove</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Favorites;