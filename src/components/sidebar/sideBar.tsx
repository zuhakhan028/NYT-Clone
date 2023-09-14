import "./sideBar.css"
interface sideBar{
    isOpen:boolean;
    onClose: () => void;
}
function SideBar(props:sideBar){

    
    return(
        
        <div   className={`sidebar ${props.isOpen ? "open" : ""}`} onMouseLeave={props.onClose}>
             <div className="sidebar-content">
             
        </div>
           
        </div>
    )
}

export default SideBar