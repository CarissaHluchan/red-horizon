import './AllMarsMedia.css';
import { Link } from 'react-router-dom';

interface Link {
  href: string;
  rel: string;
  render: string;
}

interface PhotoData {
  description: string;
  title: string;
  photographer: string;
  location: string;
  nasa_id: string;
  date_created: string;
  keywords: string[];
  media_type: string;
  center: string;
}

interface PhotoItem {
  href: string;
  data: PhotoData[];
  links: Link[];
}

interface AllMarsResponse {
  collection: {
    version: string;
    href: string;
    items: PhotoItem[];
  };
}

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
}


function AllMarsMedia({ allMarsData, handleAddToFavorites }: AllMarsMediaProps) {

  const handleFavoriteClick = (photo: Photo) => {
    handleAddToFavorites(photo);
  };

  return (
    <section className='media-section'>
      <Link to='/favorites' className='favorites-button'>See Favorites</Link>
      <div className="media-gallery">
        {allMarsData.map(photo => (
          <div key={photo.id} className="media-item">
            <Link to={`/AllMarsMedia/${photo.id}`}>
              <img className='single-thumnail' src={photo.img_src} alt={`${photo.title}`} />
            </Link>
            <div className='favorites-radio-button-parent'>
              <p>Add to favorites</p>
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

export default AllMarsMedia;