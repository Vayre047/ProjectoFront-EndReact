import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown-component";
import { UserContext } from '../../../Context/user-context';
import './list-component.scss';

function List({ items, myKey }){
    // state variable dropdown to show list of options when triggered
    const [dropdown, setDropdown] = useState(false);
    const { state } = useContext(UserContext);

    const onMouseEnter = () => {
        setDropdown(true);
    }

    const onMouseLeave = () => {
        setDropdown(false);
    }

    
    return(
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="menuItems">
        {/* List of menus (Filmes, Series, Idioma, Iniciar Sessão) */}
            {(myKey === 3 && state === true) ? <img className="userProfile" src="../../../../images/user.png" alt="Profile Image" /> : 
                    <div>
                        <button className={`menuButton ${myKey === 3 ? 'loginButton' : ''}`} type="button" aria-haspopup="menu" aria-expanded={ dropdown ? "true" : "false" }>
                            {/* when clicked follow the "to" route */}
                        <Link className="tagButton" to={items.to} state={{ items: items }}>{items.title}</Link>
                        </button>
                        {/* Create Dropdown List */}
                        <Dropdown submenus= {items.submenu} title= {items.title} dropdown={dropdown} />
                    </div>
    }
        </li>
    )
}

export default List;