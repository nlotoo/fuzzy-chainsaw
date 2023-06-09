import React, { createContext, useContext, useState, } from 'react';
const Context = createContext();

export const StateContext = ({ children }) => {



    let [AuthMenuState, setStateAuthMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const [userToken, setUserToken] = useState(null);



    const switchOffAuthMenu = () => {
        setStateAuthMenu(!AuthMenuState);

    };

    let [switchCreateForm, setSwitch] = useState(false);

    const CreateAccForm = (e) => {
        setSwitch(!switchCreateForm)

    }



    return (
        <Context.Provider value={
            {
                AuthMenuState,
                setStateAuthMenu,
                switchOffAuthMenu,
                showMenu,
                setShowMenu,
                switchCreateForm,
                setSwitch,
                CreateAccForm,

                userToken,
                setUserToken,
            }
        }>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)
