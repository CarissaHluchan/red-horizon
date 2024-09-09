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
  
  function DynamicMedia({ data, title ,id ,img_src,description,title,date_created}: DynamicMediaProps) {
    return (
      <div className="media-gallery">
        <h3>{title}</h3>
        {data.map(photo => (
          <div key={photo.id} className="media-item">
            <Link to={`/media/${photo.id}`} >
              <img className='single-thumbnail' src={photo.img_src} alt={photo.title} />
              <label className='sinfle-tital' src={photo.title}
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