import './card-component.scss';

function Card({ imgsrc }) {
    return (
        <div key={imgsrc.Id}>
            <img className='sizeImage' src={imgsrc.Image} alt="" />
        </div>
    )
}

export default Card;