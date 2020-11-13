import axios from 'axios'

const apiUrl = `https://dev-api.superintel.systems`;

export const Api_GET = async (url) => {
  let dataList = [];
  let apiUrl = url

  const response = await fetch("https://dev-api.superintel.systems/" + apiUrl);
  let data = await response.json();
  dataList.push(data)

  return dataList;
}

export const Api_PATCH = async (apiUrl, body) => {

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    console.log(cookieValue);
    return cookieValue;
}
  const csrftoken = getCookie('csrftoken');

  const requestOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrftoken,
        },
        body: JSON.stringify(body)
    };
    fetch("https://api.superintel.systems/" + apiUrl, requestOptions)
        .then(response => {
            response.json();
            console.log(response);
            })
}


export const get = (endpoint) => {
    return axios.get(`${apiUrl}/${endpoint}`)
}