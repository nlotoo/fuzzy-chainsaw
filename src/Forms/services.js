export const RegisterUser = (obj) => {

    // console.log(obj)

    return fetch('http://localhost:5000/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
        .then((res) => {
            return res.json();
        })
        .then((jsonData) => {
            console.log(jsonData)
            return jsonData
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}