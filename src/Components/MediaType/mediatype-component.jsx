import './mediatype-component.scss';
import { useState } from 'react';
import MediaLine from './medialine-component';
import RightArrow from '../Arrows/right-arrow-component';
import LeftArrow from '../Arrows/left-arrow-component';

function MediaType({ Movies, Series } ){
    // state variables saving initial images positions and current (index of first view pos)
    const [ view, setView ] = useState([0, 1, 2, 3]);
    const [ secondView, setSecondView ] = useState([0, 1, 2, 3]);
    const [ current, setCurrent ] = useState(0);
    const [ secondaryCurrent, setSecondaryCurrent ] = useState(0);
    const moviesLen = Movies.length;
    const seriesLen = Series.length;

    const onMoviesLeftButton = (event) => {
        if (current === 4) {
            setView([current + 1, current + 2, current + 3, 0]);
            setCurrent(current + 1);
        } else if (current === 5) {
            setView([current + 1, current + 2, 0, 1]);
            setCurrent(current + 1);
        } else if (current === 6) {
            setView([current + 1, 0, 1, 2]);
            setCurrent(0);
        } else {
            setView([current + 1, current + 2, current + 3, current + 4]);
            setCurrent(current + 1);
        }
    }

    const onMoviesRightButton = (event) => {
        if (current === 0) {
            setView([moviesLen - 1, current, current + 1, current + 2]);
            setCurrent(moviesLen - 1);
        } else if (current === 7) {
            setView([moviesLen - 2, moviesLen - 1, 0, 1]);
            setCurrent(current - 1);
        } else if (current === 6) {
            setView([moviesLen - 3, moviesLen - 2, moviesLen - 1, 0]);
            setCurrent(current-1);
        } else {
            setView([current - 1, current, current + 1, current + 2]);
            setCurrent(current - 1);
        }
    }

    const onSeriesLeftButton = (event) => {
        if (secondaryCurrent === 10) {
            setSecondView([secondaryCurrent + 1, secondaryCurrent + 2, secondaryCurrent + 3, 0]);
            setSecondaryCurrent(secondaryCurrent + 1);
        } else if (secondaryCurrent === 11) {
            setSecondView([secondaryCurrent + 1, secondaryCurrent + 2, 0, 1]);
            setSecondaryCurrent(secondaryCurrent + 1);
        } else if (secondaryCurrent === 12) {
            setSecondView([secondaryCurrent + 1, 0, 1, 2]);
            setSecondaryCurrent(0);
        } else {
            setSecondView([secondaryCurrent + 1, secondaryCurrent + 2, secondaryCurrent + 3, secondaryCurrent + 4]);
            setSecondaryCurrent(secondaryCurrent + 1);
        }
    }

    const onSeriesRightButton = (event) => {
        if (secondaryCurrent === 0) {
            setSecondView([seriesLen - 1, secondaryCurrent, secondaryCurrent + 1, secondaryCurrent + 2]);
            setSecondaryCurrent(seriesLen - 1);
        } else if (secondaryCurrent === 12) {
            setSecondView([seriesLen - 2, moviesLen - 1, 0, 1]);
            setSecondaryCurrent(secondaryCurrent - 1);
        } else if (secondaryCurrent === 13) {
            setSecondView([seriesLen - 3, seriesLen - 2, seriesLen - 1, 0]);
            setSecondaryCurrent(secondaryCurrent - 1);
        } else {
            setSecondView([secondaryCurrent - 1, secondaryCurrent, secondaryCurrent + 1, secondaryCurrent + 2]);
            setSecondaryCurrent(secondaryCurrent - 1);
        }
    }

    const mediaMoviesArray = [Movies[view[0]], Movies[view[1]], Movies[view[2]], Movies[view[3]]];
    const mediaSeriesArray = [Series[secondView[0]], Series[secondView[1]], Series[secondView[2]], Series[secondView[3]]];

    return(
        <div>
            <div>
                <h1 className='moviesTitle'>Filmes</h1>
                <div className='viewPosition'>
                    <button className='firsBtnLeft' type='button' onClick={onMoviesLeftButton}>
                        <LeftArrow />
                    </button>
                    {/* Call Media component with first, ... position of Movies db */}
                    <MediaLine media={ mediaMoviesArray } mediaType={'Filmes'} />
                    <button className='firsBtnRight' type='button' onClick={onMoviesRightButton}>
                        <RightArrow />
                    </button>
                </div>
            </div>
            <div>
                <h1 className='moviesTitle'>Séries</h1>
                <div className='viewPosition'>
                    <button className='firsBtnLeft' type='button' onClick={onSeriesLeftButton}>
                        <LeftArrow />
                    </button>
                    <MediaLine media={mediaSeriesArray} mediaType={'Series'} />
                    <button className='firsBtnRight' type='button' onClick={onSeriesRightButton}>
                        <RightArrow />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MediaType;