function fetchJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 400) {
            callback(null, xhr.response);
        } else {
            callback(new Error(`Someting went wrong ${xhr.status}`), null);
        }
    }

    xhr.onerror = () => {
        callback(new Error(`Network error`), null);
    }

    xhr.open('GET', url);
    xhr.send();
}

const url = `https://randomuser.me/api/`;

fetchJSON(url, (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data.results[0].email);
        fetchJSON(url, (error,data) => {
            if(error) {
                console.log(error);
            } else {
                console.log(data.results[0].email);
                fetchJSON(url, (error, data) => {
                    if(error) {
                        console.log(error);
                    } else {
                        console.log(data.results[0].email)
                    }
                })
            }
        })
    }
})
