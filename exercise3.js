const url = `https://randomuser.me/api/`;

const fetchJSONPromise = (url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
       xhr.responseType = 'json'

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 400) {
                resolve(xhr.response);
            } else {
                reject(new Error('Something went wrond. ' + xhr.status ));
            }
        }

        xhr.onerror = () => {
            reject(new Error('Network problem... ' + xhr.status))
        }
        xhr.open('GET', url);
        xhr.send()
    }); 

    return promise;
}

fetchJSONPromise(url)
    .then(response =>{
        console.log(response.results[0].email)
        setTimeout(() => {
           return fetchJSONPromise(url);
        }, 2000);
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

//SETTIMEOUT EXAMPLE
// const wait = (ms) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${ms/1000} seconds has passed...`)
//         }, ms)
//     });
//     return promise;
// }

// wait(2500).then(response => console.log(response));

