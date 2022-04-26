import { Link, useLocation } from 'react-router-dom';
import { acção } from '../../Components/Line/Movies DB/acção-db';
import { comédia } from '../../Components/Line/Movies DB/comédia-db';
import { drama } from '../../Components/Line/Movies DB/drama-db';
import { terror } from '../../Components/Line/Movies DB/terror-db';
import { mistério } from '../../Components/Line/Movies DB/mistério-db';
import { romance } from '../../Components/Line/Movies DB/romance-db';
import { thriller } from '../../Components/Line/Movies DB/thriller-db';
import { western } from '../../Components/Line/Movies DB/western-db';
import { seriesAcção } from '../../Components/Line/Series DB/series-acção-db';
import { seriesAnimação } from '../../Components/Line/Series DB/series-animação-db';
import { seriesAventura } from '../../Components/Line/Series DB/series-aventura-db';
import { seriesComédia } from '../../Components/Line/Series DB/series-comedia-db';
import { seriesCrime } from '../../Components/Line/Series DB/series-crime-db';
import { seriesDrama } from '../../Components/Line/Series DB/series-drama-db';
import { seriesFicçãoCientifica } from '../../Components/Line/Series DB/series-ficção-cientifica-db';
import { seriesGuerra } from '../../Components/Line/Series DB/series-guerra-db';
import { seriesMistério } from '../../Components/Line/Series DB/series-mistério-db';
import { seriesPolicial } from '../../Components/Line/Series DB/series-policial-db';
import { seriesRomance } from '../../Components/Line/Series DB/series-romance-db';
import { seriesSuspanse } from '../../Components/Line/Series DB/series-suspanse-db';
import { seriesTerror } from '../../Components/Line/Series DB/series-terror-db';
import { seriesThriller } from '../../Components/Line/Series DB/series-thriller-db';
import Line from '../../Components/Line/line-component';
import { Dropdown } from '../Header/NavBar/dropdown-db';
import './category-component.scss'

function Category(){
    // Receive from Media Component the location of objects for current url /category
    const location = useLocation();
    const { cat, mediatype } = location.state;
    
    let toRoute = "/" + mediatype.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // Receives database related to the required category
    let database = [];
    // Items to be sent to /filmes or /series route
    let itemsArr = Dropdown.filter((item) =>
        item.title.includes(mediatype)
    );

    let items= itemsArr[0];
    
    const allMovieCategories = [
        { id: 'acção', db: acção },
        { id: 'comédia', db: comédia },
        { id: 'drama', db: drama },
        { id: 'terror', db: terror },
        { id: 'mistério', db: mistério },
        { id: 'romance', db: romance },
        { id: 'thriller', db: thriller },
        { id: 'western', db: western }
    ];

    const allSerieCategories = [
        { id: 'acção', db: seriesAcção },
        { id: 'animação', db: seriesAnimação },
        { id: 'aventura', db: seriesAventura },
        { id: 'comédia', db: seriesComédia },
        { id: 'crime', db: seriesCrime },
        { id: 'drama', db: seriesDrama },
        { id: 'ficção cientifica', db: seriesFicçãoCientifica },
        { id: 'guerra', db: seriesGuerra },
        { id: 'mistério', db: seriesMistério },
        { id: 'policial', db: seriesPolicial },
        { id: 'romance', db: seriesRomance },
        { id: 'suspense', db: seriesSuspanse },
        { id: 'terror', db: seriesTerror },
        { id: 'thriller', db: seriesThriller }
    ];
    
    // filter array to retrieve category db
    if( mediatype === 'Filmes'){
        database = allMovieCategories.filter((allMovieCategorie) =>
            allMovieCategorie.id.includes(cat.toLocaleLowerCase())
        );
    } else {
        database = allSerieCategories.filter((allSerieCategorie) => 
            allSerieCategorie.id.includes(cat.toLocaleLowerCase())
        );
    } 
    // Category Page
    return(
        <div>
            <h1 className='titleCategory'>{cat}</h1>
            <Link to = { toRoute } state={{ items: items }}>
                <h2>{ mediatype }</h2>
            </Link>
            <div>
                {/* 4 image line */}
                <Line database={database[0].db} row={[0, 1, 2, 3]} mediatype= {mediatype} />
                <Line database={database[0].db} row={[4, 5, 6, 7]} mediatype={mediatype} />
                <Line database={database[0].db} row={[8, 9, 10, 11]} mediatype={mediatype} />
                <Line database={database[0].db} row={[12, 13, 14, 15]} mediatype={mediatype} />
            </div>
        </div>
    )
}

export default Category;