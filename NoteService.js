import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://bani4kanotes-7107.restdb.io/rest/bani4kanotes';
const API_KEY = '60a79799e3b6e02545edab48';

export function getNotes() {
    return fetch(BASE_URL,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        }
    )
    .then(response => response.json())
    .then(notes => notes.map(item => ({
        ...item,
        date: moment(item.date, "DD/MM/YYYY HH:mm").toDate(),
    })));
}

export function addNote({title, date, description}) {
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
        .catch(error => console.error(error));
}

export function getNoteById(id) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        }
    )
    .then(response => response.json())
    .then(item => {
        return {
            ...item,
            date: moment(item.date, "DD/MM/YYYY HH:mm").toDate()
        }
    })
    .catch(error => console.error(error));    
}

export function editNote({id, title, date, description}) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            },
            body: JSON.stringify({
                title, date, description
            })
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}

export function deleteNote(id) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}