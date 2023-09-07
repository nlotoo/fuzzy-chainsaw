import React, { createContext, useContext, useEffect, useState, } from 'react';
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

    let [openCloseRecord, setOpenCloseRecord] = useState(false);


    let openCloseCreateRecord = () => {



        return setOpenCloseRecord(!openCloseRecord)
    }



    let [categoriesHolder, setCategoriesHolder] = useState('No category')

    const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0 });

    const timeCalculate = (targetDate) => {

        console.log(targetDate);



        const currentTime = new Date();
        const timeDifference = currentTime - targetDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        setTimePassed({ days, hours, minutes });
    }



    const [categories, setCategorries] = useState([]);

    const categoryGetter = (event) => {


        if (categories.find((element) => element == event.target.value)) {


            setCategorries(categories.filter(a => a !== event.target.value))
        } else {

            categories.push(event.target.value)

        }

        console.log(categories)


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

                openCloseCreateRecord,
                openCloseRecord,
                setOpenCloseRecord,

                categoriesHolder,
                setCategoriesHolder,

                timePassed,
                setTimePassed,
                timeCalculate,

                categories,
                categoryGetter
            }
        }>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)
