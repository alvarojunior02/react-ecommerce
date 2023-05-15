import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

import Logo from "../assets/logo.png";
import SearchIcon from "../assets/icons/search.png";
import UserIcon from "../assets/icons/user.png";

import { useState } from "react";

export default function DefaultLayout() {
    const {user, token} = useStateContext();
    const [searchBar, setSearchBar] = useState("");

    if (token && user.roles[0].name === "admin") {
        return <Navigate to="/dashboard" />
    }

    return (
        <div className="defaultContainer">
            <div className="headerContainer">
                <header className="header">
                    <div className="logoContainer">
                        <Link to="/home">
                            <img src={Logo} alt="Logo" width={50} height={50}/>
                        </Link>
                    </div>

                    <div className="searchBarContainer">
                        <input
                            className="searchBar"
                            placeholder="Buscar produto..." 
                            type="text"
                            value={searchBar}
                            onChange={(event) => {
                                setSearchBar(event.target.value);
                            }}
                        >
                            
                        </input>

                        <button className="searchButton">
                            <img src={SearchIcon} alt="Button Search" width={"20px"} height={"20px"} />
                        </button>
                    </div>

                    <div className="userInfoContainer">
                        { token ? (
                                <div className="userLinksContainer">
                                    <a href="/my-account">
                                        <img  src={UserIcon} alt="User Icon" width={50} height={50} />
                                    </a>
                                </div>
                            )
                            : (
                                <div className="userLinksContainer">
                                    <a href="/login"  className="buttonLogin">
                                        <p>Logar</p>
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </header>
            </div>
            
            <Outlet />
        </div>
    )
}