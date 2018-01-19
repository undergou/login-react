import React from 'react';

const getData =(requestAdress) => {
    return fetch(requestAdress,  {
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        method: 'get'
    })
}

export default getData;