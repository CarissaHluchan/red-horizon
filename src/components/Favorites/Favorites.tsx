import './Favorites.css';
import { Link } from 'react-router-dom';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface FavoritesProps {
  favorites: Photo[]
}

function Favorites({ favorites }: FavoritesProps) {

  return (
    <section className='favorites-section'>
      <div className='favorites-title'>Your Favorites</div>
      <div className='media-gallery'>
        {favorites.map(photo => (
          <div key={photo.id} className='media-item'>
            <p className='media-item-title'>{photo.title}</p>
            <Link to={`/media/${photo.id}`}>
              <img
                className='single-thumbnail'
                src={photo.img_src}
                alt={photo.title} />
            </Link>
            <p className='media-item-date'>
              <span className='date-taken' >{'DATE TAKEN: '}</span>
              {photo.date_created}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Favorites;