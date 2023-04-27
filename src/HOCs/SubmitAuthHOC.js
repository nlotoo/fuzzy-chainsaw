import { useStateContext } from "../context/StateContext";

let localStorageCheker = localStorage.getItem('accoutName')


const SubmitAuthHoc = (OrgiinalComponent) => {

    let { switchOffAuthMenu } = useStateContext()
    return (data) => {


        if (localStorageCheker == null) {
            console.log('go to login form')

            window.location.replace("/")
            switchOffAuthMenu()



        }

        return <OrgiinalComponent {...data} />;
    };
};

export default SubmitAuthHoc;