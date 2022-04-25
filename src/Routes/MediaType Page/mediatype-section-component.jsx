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
import { useState } from 'react';
import Media from '../../Components/Media/media.component';
import './mediatype-section-component.scss';

function MediaTypeSection({ cat, mediatype }){
    const [ basicView, setBasicView ] = useState([0, 1, 2, 3, 4]);
    const [ sectioncurrent, setSectionCurrent ] = useState(0);
    
    let database = [];
    
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
    
    if (mediatype === 'Filmes') {
        database = allMovieCategories.filter((category) =>
        category.id.includes(cat.toLocaleLowerCase())
        );
    } else {
        database = allSerieCategories.filter((category) =>
        category.id.includes(cat.toLocaleLowerCase())
        );
    }
    
    const sectionDatabase = database[0].db.length;

    const onSectionLeftButton = (event) =>{
        if (sectioncurrent === 11) {
            setBasicView([sectioncurrent + 1, sectioncurrent + 2, sectioncurrent + 3, sectioncurrent + 4, 0]);
            setSectionCurrent(sectioncurrent + 1);
        }else if (sectioncurrent === 12) {
            setBasicView([sectioncurrent + 1, sectioncurrent + 2, sectioncurrent + 3, 0, 1]);
            setSectionCurrent(sectioncurrent + 1);
        } else if (sectioncurrent === 13) {
            setBasicView([sectioncurrent + 1, sectioncurrent + 2, 0, 1, 2 ]);
            setSectionCurrent(sectioncurrent + 1);
        } else if (sectioncurrent === 14) {
            setBasicView([sectioncurrent + 1, 0, 1, 2, 3]);
            setSectionCurrent(0);
        } else {
            setBasicView([sectioncurrent + 1, sectioncurrent + 2, sectioncurrent + 3, sectioncurrent + 4, sectioncurrent + 5]);
            setSectionCurrent(sectioncurrent + 1);
        }
    }

    const onSectionRightButton = (event) => {
        if (sectioncurrent === 0) {
            setBasicView([sectionDatabase - 1, sectioncurrent, sectioncurrent + 1, sectioncurrent + 2, sectioncurrent + 3]);
            setSectionCurrent(sectionDatabase - 1);
        } else if (sectioncurrent === 15) {
            setBasicView([sectionDatabase - 2, sectionDatabase - 1, 0, 1, 2]);
            setSectionCurrent(sectioncurrent - 1);
        } else if (sectioncurrent === 14) {
            setBasicView([sectionDatabase - 3, sectionDatabase - 2, sectionDatabase - 1, 0, 1]);
            setSectionCurrent(sectioncurrent - 1);
        } else if (sectioncurrent === 13) {
            setBasicView([sectionDatabase - 4, sectionDatabase - 3, sectionDatabase - 2, sectionDatabase - 1, 0]);
            setSectionCurrent(sectioncurrent - 1);
        } else {
            setBasicView([sectioncurrent - 1, sectioncurrent, sectioncurrent + 1, sectioncurrent + 2, sectioncurrent + 3]);
            setSectionCurrent(sectioncurrent - 1);
        }
    }

    return(
        <div className='mediatypeSpacing'>
            <h3 className="categoryPosition">{cat}</h3>
            <div className='viewPosition'>
                <button className='categoryBtnLeft' type='button' onClick={onSectionLeftButton}>
                    {String.fromCharCode(60)}
                </button>
                <Media media={database[0].db[basicView[0]]} mediaType={ mediatype } cat={ cat } />
                <Media media={database[0].db[basicView[1]]} mediaType={ mediatype } cat={ cat } />
                <Media media={database[0].db[basicView[2]]} mediaType={ mediatype } cat={ cat } />
                <Media media={database[0].db[basicView[3]]} mediaType={ mediatype } cat={ cat } />
                <Media media={database[0].db[basicView[4]]} mediaType={ mediatype } cat={ cat } />
                <button className='categoryBtnRight' type='button' onClick={onSectionRightButton}>
                    {String.fromCharCode(62)}
                </button>
            </div>
        </div>
    )
}

export default MediaTypeSection;