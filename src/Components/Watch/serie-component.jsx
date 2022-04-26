import { useLocation } from "react-router-dom";
import './filme-component.scss';

function SerieDetail(){
    const location = useLocation();
    const { media } = location.state;

    const { Id, Image, Title, Director, Elenco, Sinopse, Temporada } = media;

    
    return(
        <div className="columnsPosition" key={Id}>
            <div>
                <img className="imageConfiguration" src={Image} alt="Movie Image" />
            </div>
            <div className="textPosition">
                <h3>Título: {Title}</h3>
                <p>Director: {Director}</p>
                <p>Elenco: {Elenco}</p>
                <p>Sinopse: {Sinopse}</p>
                {Temporada.map((temp, index) =>
                    <button key={index} type="button">
                        {temp}
                    </button> 
                )}
                
            </div>
        </div>
    )
}

export default SerieDetail;