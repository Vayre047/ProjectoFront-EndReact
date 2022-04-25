import { Link } from 'react-router-dom';
import Navigation from './NavBar/navigation-component';
import './header-component.scss';

function Header(){
    return(
        <div className='header-container'>
            <Link to='/'>
                <img width={150} src="../../images/logotipo.png" alt="Logotipo" />
            </Link>
            <Navigation />
            <h1 className="mainTitle">TBAFlix</h1>
        </div>
    )
}

export default Header;