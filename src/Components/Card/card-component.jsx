import './card-component.scss';
import { Link } from "react-router-dom";

function Card({ media, mediatype }) {
    let toRoute = '';

    if (mediatype === 'Filmes') {
        toRoute = '/verfilme'
    } else (
        toRoute = '/verserie'
    )

    return (
        <div key={media.Id}>
            <Link to={toRoute} state= {{ media: media }}>
                <img className='sizeImage' src={media.Image} alt="" />
            </Link>
        </div>
    )
}

export default Card;