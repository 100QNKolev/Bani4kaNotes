import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://github.com/100QNKolev/Bani4kaNotes';
const API_KEY = '60a79799e3b6e02545edab48';

export function addNote({ title, date, description }) {
    return fetch(BASE_URL,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            },
            body: JSON.stringify({
                title, date, description, id: uuid()
            })
        })
        .then(result => result.json())
        .catch(error => console.error(error))
}