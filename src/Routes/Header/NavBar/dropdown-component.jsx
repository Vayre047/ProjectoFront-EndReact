import { Link } from 'react-router-dom';
import './dropdown-component.scss';

function Dropdown({ submenus, title, dropdown}){
    const configureLink = {
        textDecoration: 'none',
        color: '#fff'
    }

    return(
        <div>
        {/* If dropdown true class show is used */}
            <ul className={`toggleMenu ${dropdown ? "show" : ""}`}>
                {submenus.map(( submenu, index ) => 
                    <li className='configurationList' key={index}>
                    {/* Call Route category with category title and mediatype title */}
                        <Link style={configureLink} to='/category' state={{ cat: submenu.title, mediatype: title }} >{submenu.title}</Link>                    
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Dropdown;