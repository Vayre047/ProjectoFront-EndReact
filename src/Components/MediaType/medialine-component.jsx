import Media from '../Media/media.component';

function MediaLine({ mediaType, media }){

    return(
        <div className = 'viewPosition'>
            {/* Call Media component with first, ... position of Movies db */}
            <Media media={media[0]} mediaType={mediaType} cat={''} isMovieSerie={false} />
            <Media media={media[1]} mediaType={mediaType} cat={''} isMovieSerie={false} />
            <Media media={media[2]} mediaType={mediaType} cat={''} isMovieSerie={false} />
            <Media media={media[3]} mediaType={mediaType} cat={''} isMovieSerie={false} />
        </div>
    )
}

export default MediaLine;