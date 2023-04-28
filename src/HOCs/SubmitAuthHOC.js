// import { useStateContext } from "../context/StateContext";0
// let localStorageCheker = localStorage.getItem('accoutName')


// NOT WORKINGGGGGGGGGGGG



const SubmitAuthHoc = (OrgiinalComponent) => {

    // let { switchOffAuthMenu } = useStateContext()
    return (data) => {

        console.log(localStorage.getItem('accountName'))


        if (localStorage.getItem('accountName') == null) {
            console.log('go to login form')

            window.location.replace("/")
            // switchOffAuthMenu()

        }
        console.log('local storage has account Name')

        return <OrgiinalComponent {...data} />;
    };
};

export default SubmitAuthHoc;