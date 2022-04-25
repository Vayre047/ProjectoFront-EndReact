import { Link } from 'react-router-dom';
import './media.component.scss';

function Media({ media, mediaType, cat }){
    const { Image, Id, Category } = media;

    let catState = cat;

    if( cat === '' ){
        catState = Category;
    }

    return(
        <div className="moviesPosition" key={Id}>
            <h2 className='titleStyle'>{Category}</h2>
        {/* Call category route */}
            <Link className='configureLink' to='/category' state={{ cat: catState, mediatype: mediaType }} >
                <img className='moviesSizeImage' src={Image} />
            </Link>
        </div>
    )
}

export default Media;