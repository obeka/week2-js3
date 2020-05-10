const url = `https://randomuser.me/api/`;
const myPromise = axios.get(url);

myPromise.then(response => {
     if(response.data.results[0].gender == 'male') {
         console.log(response.data.results[0].gender)
        return axios.get(url)
    } else {
        return 'It was a female.';
    }
})
 .then(response => {
    if(typeof response !== 'string') {
        console.log(response.data.results[0].email)
    } else {
        console.log(response)
    }
})
.catch(error => console.log(error)); 