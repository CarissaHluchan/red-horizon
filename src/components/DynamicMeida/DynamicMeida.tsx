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
    title: string;
  }
  
  function DynamicMedia({ data, title }: DynamicMediaProps) {
    return (
      <div className="media-gallery">
        <h2>{title}</h2>
        {data.map(photo => (
          <div key={photo.id} className="media-item">
            <Link to={`/media/${photo.id}`}>
              <img className='single-thumbnail' src={photo.img_src} alt={photo.title} />
            </Link>
            <div className='favorites-radio-button-parent'>
              <p>Add to favorites</p>
              <input type="radio" className='radio-button' />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default DynamicMedia;