import './line-component.scss';

import Card from "../Card/card-component";

function Line( { database, row, mediatype } ){

    return(
        <div className='mainLine'>
            <Card media={database[row[0]]} mediatype={mediatype} />
            <Card media={database[row[1]]} mediatype={mediatype} />
            <Card media={database[row[2]]} mediatype={mediatype} />
            <Card media={database[row[3]]} mediatype={mediatype} />
        </div>
    )
}

export default Line;