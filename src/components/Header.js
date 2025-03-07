import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/store/appSlice";
import { useEffect, useState } from "react";
import { GOOGLE_SUGGESTION_API } from "../utils/constants";
import { cacheResult } from "../utils/store/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)

    const dispatch = useDispatch();
    const toggleSidebarHandler = () => {
        dispatch(toggleSidebar())
    }

    const searchCache = useSelector((store) => store.search);
    /**
     * {
     *  "iphone" : ["iphone", "iphonemax"]
     * }
     */


    useEffect(() => {
       
        // make an api call after every keypress
        // but if diff btwn 2 api call is <200ms then decline api call
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
            getSearchSuggestions();
        }
        }, 200);

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        console.log("api call",  searchQuery)
        const data = await fetch(GOOGLE_SUGGESTION_API + searchQuery);
        const response = await data?.json();
        setSuggestions(response[1]);
        
        //update cache
        dispatch(cacheResult({
            [searchQuery]: response[1]
        }))
        // console.log(suggestions)
    }

    return (
        <div className="grid grid-flow-col p-5 shadow-md bg-white">
            <div className="flex col-span-1">
                <img onClick={() => toggleSidebarHandler()} className="h-8 mr-3 cursor-pointer" alt="menu" src="https://banner2.cleanpng.com/20180628/zaz/aayj9bx5v.webp" />
                <img className="h-8" src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png" alt="logo" />
            </div>
            <div className="flex col-span-10 justify-center relative">
                <div className="w-full">
                    <input
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} className="border border-gray-400 rounded-l-full w-6/12" type="text" />
                    <button className="border border-gray-400 rounded-r-full px-3">🔍</button>
                </div>
                {showSuggestions && suggestions?.length !== 0 && <div className="absolute bg-white shadow-md w-[400px] mt-[30px] p-3 left-0">
                    <ul>
                        {suggestions?.map((list) => <li key={list}>{list}</li>)}
                    </ul>
                </div>}
                
            </div>
            <div>
                <img alt="user" className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-a-TsxH9PktJwB8farsqn2EOlcsO9ODhp_Q&s" />
            </div>
        </div>
    )
}

export default Header;