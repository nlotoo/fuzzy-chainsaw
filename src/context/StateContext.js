import React, { createContext, useContext, useState, } from 'react';
const Context = createContext();

export const StateContext = ({ children }) => {

    let [AuthMenuState, setStateAuthMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


    const switchOffAuthMenu = () => {
        setStateAuthMenu(!AuthMenuState);

    };




    return (
        <Context.Provider value={
            {
                AuthMenuState,
                setStateAuthMenu,
                switchOffAuthMenu,
                showMenu,
                setShowMenu
            }
        }>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)
