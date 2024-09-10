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
            <h3 className='photo-title'>{photo.title}</h3>
            <Link to={`/media/${photo.id}`}>
              <img className='single-thumbnail' src={photo.img_src} alt={photo.title} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Favorites;