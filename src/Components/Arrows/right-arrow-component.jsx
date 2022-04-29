import './arrow-component.scss';

function RightArrow(){
    return(
        <div>
            <svg id='arrows' className='arrowRight'>
                <polygon id='right' className='arrow' points="47,30 5,5 39,30 5,55"/>
                <polygon id='right' className='arrow arrow-middle' points="47,30 5,5 39,30 5,53" />
                <polygon id='right' className='arrow arrow-bottom' points="47,30 5,5 39,30 5,53" />
            </svg>
        </div>
    )
}

export default RightArrow;