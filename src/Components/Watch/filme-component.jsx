import { useLocation } from "react-router-dom";
import './filme-component.scss';

function FilmeDetail(){
    const location = useLocation();
    const { media } = location.state;

    const { Id, Image, Title, Director, Elenco, Sinopse } = media;

    return(
        <div className="columnsPosition" key={ Id }>
            <div>
                <img className="imageConfiguration" src={Image} alt="Movie" />
            </div>
            <div className="textPosition">
                <h3>Título: {Title}</h3>
                <p>Director: {Director}</p>
                <p>Elenco: {Elenco}</p>
                <p>Sinopse: {Sinopse}</p>
            </div>
        </div>
    )
}

export default FilmeDetail;