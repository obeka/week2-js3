const url = `https://randomuser.me/api/`;
const promise1 = axios.get(url);
const promise2 = axios.get(url);

const combinedProimeses = Promise.all([promise1,promise2]);

combinedProimeses
    .then(response => {
        const female1 = response[0].data.results[0].gender;
        const female2 = response[1].data.results[0].gender;
        console.log(female1, female2)
        if(female1 === 'female' && female2 === 'female') {
            return axios.get(url);
        } else {
            return 'Not 2 females';
        }
    })
    .then(response => {
        if(typeof response !== 'string') {
            console.log('3th person request')
            return axios.get(url);
        } else {
            return response;
        }
    })
    .then(response => {
        if(typeof response !== 'string') {
            console.log('4th person request')

            console.log(response.data.results[0].email)
        } else {
            console.log(response)
        }
    })
    .catch(error => console.log(error));