
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
    if(!isSidebarOpen) return null;
    return (
        <div className="col-span-1 bg-white shadow-md p-5 max-w-96">
            <h1 className="font-bold mb-1">Subscriptions</h1>
            <ul className="mb-3">
                <li><Link to="/">Home</Link></li>
                <li>Music</li>
            </ul>
            <h1 className="font-bold mb-1">Recent Watches</h1>
            <ul>
                <li>Sports</li>
                <li>Music</li>
            </ul>
        </div>
    )
}

export default Sidebar;