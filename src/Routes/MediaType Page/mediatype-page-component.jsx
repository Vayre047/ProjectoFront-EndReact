import { useLocation } from "react-router-dom";
import MediaTypeSection from "./mediatype-section-component";
import './mediatype-page-component.scss';

function MediatypePage(){
    // Receives items from Category or MenuList Components 
    const location = useLocation();
    const { items } = location.state;

    console.log(items)
    return(
        <div>
            <h2 className="titleCategory">{items.title}</h2>
            {items.submenu.map((item, index) => (
                <MediaTypeSection cat={item.title} mediatype={items.title} key={index} />
            ))}
        </div>
    )
}

export default MediatypePage;