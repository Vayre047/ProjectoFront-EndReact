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
import React, { useEffect, useState } from 'react';
import Media from '../../Components/Media/media.component';
import { Link } from 'react-router-dom';
import './mediatype-section-component.scss';

function MediaTypeSection({ cat, mediatype }) {
    const [view, setView] = useState([0, 1, 2, 3]);
    const [current, setCurrent] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

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


    const onSectionLeftButton = (event) => {
        if (current === 12) {
            setView([current + 1, current + 2, current + 3, 0]);
            setCurrent(current + 1);
        } else if (current === 13) {
            setView([current + 1, current + 2, 0, 1]);
            setCurrent(current + 1);
        } else if (current === 14) {
            setView([current + 1, 0, 1, 2]);
            setCurrent(0);
        } else {
            setView([current + 1, current + 2, current + 3, current + 4]);
            setCurrent(current + 1);
        }
    }

    const onSectionRightButton = (event) => {
        if (current === 0) {
            setView([sectionDatabase - 1, current, current + 1, current + 2]);
            setCurrent(sectionDatabase - 1);
        } else if (current === 15) {
            setView([sectionDatabase - 2, sectionDatabase - 1, 0, 1]);
            setCurrent(current - 1);
        } else if (current === 14) {
            setView([sectionDatabase - 3, sectionDatabase - 2, sectionDatabase - 1, 0]);
            setCurrent(current - 1);
        } else {
            setView([current - 1, current, current + 1, current + 2]);
            setCurrent(current - 1);
        }
    }

    console.log(view);
    console.log(database[0].db[view[0]])

    return (
        <div className='mediatypeSpacing'>
            <Link className='linkCategory' to='/category' state={{ cat: cat, mediatype: mediatype }} >
                <h3 className="categoryPosition">{cat}</h3>
            </Link>
            <div className='viewPosition'>
                <button className='categoryBtnLeft' type='button' onClick={onSectionLeftButton}>
                    {String.fromCharCode(60)}
                </button>
                <Media media={database[0].db[view[0]]} mediaType={mediatype} cat={cat} isMovieSerie = {true} />
                <Media media={database[0].db[view[1]]} mediaType={mediatype} cat={cat} isMovieSerie={true} />
                <Media media={database[0].db[view[2]]} mediaType={mediatype} cat={cat} isMovieSerie={true} />
                <Media media={database[0].db[view[3]]} mediaType={mediatype} cat={cat} isMovieSerie={true} />
                <button className='categoryBtnRight' type='button' onClick={onSectionRightButton}>
                    {String.fromCharCode(62)}
                </button>
            </div>
        </div>
    )
}

export default MediaTypeSection;