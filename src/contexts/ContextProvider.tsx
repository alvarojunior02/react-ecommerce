/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from "react";
import IUser from "../interfaces/IUser";

const StateContext = createContext({
    user: {
        name: "",
        email: "",
        roles: [
            {
                name: ""
            }
        ]
    },
    token: null,
    setUser: (user: any) => {},
    setToken: (token: any) => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState<IUser>();
    const [token, _setToken] = useState(localStorage.getItem('ACESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
        }}>
            {children}
        </StateContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext)