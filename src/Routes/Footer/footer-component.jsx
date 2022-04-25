import LinkFooter from '../../Components/Links/linkFooter.component';
import '../Footer/footer-component.scss';

function Footer({links}){
    // Receives Links-db
    return(
        <div className="footer-container">
            <div className="footer-container-items">{
                 links.map((link, index) => {
                    return(
                        <LinkFooter linkfooter={link} key={ index } />
                    )
                })
            }
            </div>
            <div className='detailsContainer'>
                <p>Contactos</p>
                <p>Politica de Privacidade</p>
            </div>
            <p>&copy;Todos os Direitos Reservados</p>
        </div>
    )
}

export default Footer; 