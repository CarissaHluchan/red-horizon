import './SingleMediaDetails.css';
import { Link } from 'react-router-dom';

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface SingleMediaDetailsProps {
  data: Photo;
}

function SingleMediaDetails({ data }: SingleMediaDetailsProps) {
  return (
    <div className='single-media-detail-wrapper'>
      <div className='single-media-title'>{data.title}</div>
      <img className='single-media-main-image' src={data.img_src} alt={data.description} />
      <p className='single-media-description'>{data.description}</p>
      <div className='single-media-date'>{data.date_created}</div>
      <Link to="/allMarsMedia" className='slingle-media-back-button'>Back to All Mars Media</Link>
    </div>
  );
}

export default SingleMediaDetails;