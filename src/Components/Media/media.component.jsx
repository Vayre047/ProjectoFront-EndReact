import { Link } from 'react-router-dom';
import './media.component.scss';

function Media({ media, mediaType, cat }){
    const { Image, Id } = media;

    return(
        <div className="moviesPosition" key={Id}>
        {/* Call category route */}
            <Link className='configureLink' to='/category' state={{ cat: cat, mediatype: mediaType }} >
                <img className='moviesSizeImage' src={Image} />
            </Link>
        </div>
    )
}

export default Media;