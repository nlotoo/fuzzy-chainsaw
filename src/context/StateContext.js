import React, { createContext, useContext, useState, } from 'react';
const Context = createContext();

export const StateContext = ({ children }) => {


    let [LoginDataUser, setLoginDataUser] = useState(false)

    let [AuthMenuState, setStateAuthMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


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
                LoginDataUser,
                setLoginDataUser,
            }
        }>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)
