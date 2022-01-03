// Importações materiais UI.

import axios from 'axios';

// Constante criada para utilizar o Json-Server.
const url = 'http://localhost:3003/usuarios';

// Utilização da API.
export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (usuario) => {
    return await axios.post(url, usuario);
}

export const editUser = async (id, usuario) => {
    return await axios.put(`${url}/${id}`, usuario);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}