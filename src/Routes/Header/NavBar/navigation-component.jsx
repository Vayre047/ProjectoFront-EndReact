import { Dropdown } from './dropdown-db';
import { useState, useEffect, useContext } from "react";
import { UserContext } from '../../../Context/user-context';
import  List  from './list-component';
import{ MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './navigation-component.scss';

function Navigation(){
    const [ menuOpen, setMenuOpen ] = useState(false);
    const handleToggle = () => {
        setMenuOpen( !menuOpen );
    }

    const { width, setWidth } = useContext(UserContext);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    return(
        <nav className='navi configurationNav'>
            <button className='hambMenu' type='button' onClick={ handleToggle }>{menuOpen ? (
                <MdClose size={40} className='mdClose' />
            ) : (
                <FiMenu size={40} className='fiMenu' />
            )
        }</button>
        {( !menuOpen && width <= 520 ) ? <div></div> : 
            <ul className={`categoriesList ${menuOpen ? "showMenu" : "" }`}>
                {/* List of dropdown menus */}
                {Dropdown.map((Drop, index) => (
                    /* Call MenuList with each set of {title, to, submenu} from dropdown-db */
                    <List items={Drop} myKey={index} />
                ))}
            </ul>
            }
        </nav>
    )
}

export default Navigation;