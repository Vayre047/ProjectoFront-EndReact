import './line-component.scss';

import Card from "../Card/card-component";

function Line( { database, row } ){
    return(
        <div className='mainLine'>
            <Card imgsrc={database[row[0]]} />
            <Card imgsrc={database[row[1]]} />
            <Card imgsrc={database[row[2]]} />
            <Card imgsrc={database[row[3]]} />
        </div>
    )
}

export default Line;