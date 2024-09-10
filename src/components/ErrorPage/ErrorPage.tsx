import './ErrorPage.css';
import { useParams } from 'react-router-dom';

interface ErrorPageProps {
  error?: string | number;
}

function ErrorPage({error}: ErrorPageProps) {
const { code } = useParams();

const errorCode = error || code

    return (
        <section>
            <h2>{`We are so sorry, there been a ${errorCode} error! Please try again later.`}</h2>
        </section>
    )
}

export default ErrorPage;