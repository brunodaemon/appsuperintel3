import React from 'react';

export const Api_GET = async (url) => {
  let dataList = [];
  let currentPage = 0;
  let morePagesAvailable = true;
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


export const Api2 = async (url) => {
  let dataList = [];
  let currentPage = 0;
  let morePagesAvailable = true;
  let apiUrl = url

  while(morePagesAvailable){
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const response = await fetch(proxyUrl + apiUrl);
      let data = await response.json();
      dataList.push(data)
      apiUrl = data.next
      morePagesAvailable = apiUrl !== null
  }
  return dataList;
}