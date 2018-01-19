import React from 'react';

const sendData =(data, requestAdress) => {
    let dataJson = JSON.stringify(data);
    return fetch(requestAdress,  {
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        method: 'post',
        body: dataJson
    })
}

export default sendData;
