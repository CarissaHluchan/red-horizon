import './AllMarsMedia.css';
import { Link } from 'react-router-dom';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface AllMarsMediaProps {
  allMarsData: Photo[];
  handleAddToFavorites: (photo: Photo) => void;
  handleClick: (photo: Photo) => void;
}

function AllMarsMedia({ allMarsData, handleAddToFavorites, handleClick }: AllMarsMediaProps) {

  const handleFavoriteClick = (photo: Photo) => {
    handleAddToFavorites(photo);
  };

  console.log(allMarsData[551], '<-- DATA FROM ALL MARS DATA')

  return (
    <section className='media-section'>
      <Link to='/favorites' className='favorites-button'>See Favorites</Link>
      <div className="media-gallery">
        {allMarsData.map(photo => (
          <div key={photo.id} className="media-item">
            <h3 className='photo-title'>{photo.title}</h3>
            <Link to={`/media/${photo.id}`}>
              <img className='single-thumbnail' src={photo.img_src} alt={`${photo.title}`} onClick={() => handleClick(photo)}/>
            </Link>
            <div className='favorites-radio-button-parent'>
              <label>Add to favorites</label>
              <input
                type="radio"
                className='radio-button'
                onChange={() => handleFavoriteClick(photo)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// export default AllMarsMedia;