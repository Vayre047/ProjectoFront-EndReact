import MediaType from '../../Components/MediaType/mediatype-component';
import Register from '../Register/register-home-component';

import { Movies } from '../../Components/MediaType/movies-db';
import { Series } from '../../Components/MediaType/series-db';

function Main(){
    return(
        <div>
            <Register />
            <MediaType Movies={Movies} Series={Series} />
        </div>
    )
}

export default Main;