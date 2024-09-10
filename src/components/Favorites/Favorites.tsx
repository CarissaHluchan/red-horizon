import './Favorites.css';

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
            <img src={photo.img_src} alt={photo.title} className='single-thumnail'/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Favorites;