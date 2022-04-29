import Media from '../Media/media.component';

function MediaLine({ mediaType, media }){

    return(
        <div className = 'viewPosition'>
            {/* Call Media component with first, ... position of Movies db */}
            <Media media={media[0]} mediaType={mediaType} cat={''} />
            <Media media={media[1]} mediaType={mediaType} cat={''} />
            <Media media={media[2]} mediaType={mediaType} cat={''} />
            <Media media={media[3]} mediaType={mediaType} cat={''} />
        </div>
    )
}

export default MediaLine;