/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from "react";
import IUser from "../interfaces/IUser";
import Cookies from 'universal-cookie';

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
    const cookies = new Cookies();

    const [user, _setUser] = useState<IUser>(cookies.get('USER'));
    const [token, _setToken] = useState(cookies.get('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            cookies.set('ACCESS_TOKEN', token);
        } else {
            cookies.remove('ACCESS_TOKEN');
        }
    }

    const setUser = (user) => {
        _setUser(user);
        if (user) {
            cookies.set('USER', user);
        } else {
            cookies.remove('USER');
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