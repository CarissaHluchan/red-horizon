import './SingleMediaDetails.css';
import { Link } from 'react-router-dom'

interface Photo {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;
}

interface SingleMediaDetailsProps {
  id: string;
  img_src: string;
  description: string;
  title: string;
  date_created: string;

}

function SingleMediaDetails() {

  return (
    <section>
      <h1>This will be something from single media....</h1>
    </section>
  )
}

export default SingleMediaDetails;