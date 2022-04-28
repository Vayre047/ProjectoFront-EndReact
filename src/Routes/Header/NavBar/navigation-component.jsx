import { Dropdown } from './dropdown-db';
import  List  from './list-component';
import './navigation-component.scss';

function Navigation(){
    return(
        <nav className='configurationNav'>
            <ul className='categoriesList'>
                {/* List of dropdown menus */}
                {Dropdown.map((Drop, index) => (
                    /* Call MenuList with each set of {title, to, submenu} from dropdown-db */
                    <List items={Drop} myKey={index} />
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;