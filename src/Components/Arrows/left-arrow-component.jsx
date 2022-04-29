import './arrow-component.scss';

function LeftArrow(){

    return(
        <div>
            <svg id='arrows' className='arrowLeft'>
                <polygon className='arrow' points="5,30 47.5,5 12,30 47.5,55" />
                <polygon className='arrow arrow-middle' points="5,30 47.5,5 12,30 47.5,53" />
                <polygon className='arrow arrow-bottom' points="5,30 47.5,5 12,30 47.5,53" />
            </svg>
        </div>
    )
}

export default LeftArrow;