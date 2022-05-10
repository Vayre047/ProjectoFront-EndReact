import { Link } from 'react-router-dom';
import './media.component.scss';

function Media({ media, mediaType, cat }){
    const { Image, Id, Category } = media;

    let catState = cat;

    if( cat === '' ){
        catState = Category;
    }

    let toRoute = '';

    if( mediaType === 'Filmes' ){
        toRoute = '/verfilme'
    }else(
        toRoute ='/verserie'
    )

    return(
        <div className="moviesPosition" key={Id}>
            {/* Call category route */}
            <Link className='configureLink' to='/category' state={{ cat: catState, mediatype: mediaType }} >
                <h2 className='titleStyle'>{Category}</h2>
            </Link>
            <Link to={toRoute} state={{ media: media }}>
                <img className='moviesSizeImage' src={Image} alt="Movies Image" />
            </Link>
        </div>
    )
}

export default Media;