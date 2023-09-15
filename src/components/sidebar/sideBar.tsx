import "./sideBar.css"
import { sidebarSections } from "../../assets/data";
interface sideBar {
    isOpen: boolean;
    onClose: () => void;
}
function SideBar(props: sideBar) {


    return (

        <div className={`sidebar ${props.isOpen ? "open" : ""}`} onMouseLeave={props.onClose}>
            <div className="sidebar-content">
            {Object.keys(sidebarSections).map((sectionName, index) => (
          <div key={index} className="sidebar-section">
            <h2>{sectionName}</h2>
            <ul className="sidebar-items">
              
            </ul>
          </div>
        ))}

            </div>

        </div>
    )
}

export default SideBar