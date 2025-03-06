import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/store/appSlice";

const Header = () => {
    const dispatch = useDispatch();
    const toggleSidebarHandler = () => {
        dispatch(toggleSidebar())
    }
    return (
        <div className="grid grid-flow-col p-5 shadow-md bg-white">
            <div className="flex col-span-1">
                <img onClick={() => toggleSidebarHandler()} className="h-8 mr-3 cursor-pointer" alt="menu" src="https://banner2.cleanpng.com/20180628/zaz/aayj9bx5v.webp" />
                <img className="h-8" src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png" alt="logo" />
            </div>
            <div className="flex col-span-10 justify-center">
                <input className="border border-gray-400 rounded-l-full w-6/12" type="text" />
                <button className="border border-gray-400 rounded-r-full px-3">🔍</button>
            </div>
            <div>
                <img alt="user" className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-a-TsxH9PktJwB8farsqn2EOlcsO9ODhp_Q&s" />
            </div>
        </div>
    )
}

export default Header;