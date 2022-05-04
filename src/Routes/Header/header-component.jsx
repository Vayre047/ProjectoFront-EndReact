import { Link } from 'react-router-dom';
import Navigation from './NavBar/navigation-component';
import './header-component.scss';

function Header(){
    return(
        <div className='header-container'>
            <Link to='/'>
                <img className='logoPosition' src="../../images/logotipo.png" alt="Logotipo" />
            </Link>
            <Navigation />
        </div>
    )
}

export default Header;