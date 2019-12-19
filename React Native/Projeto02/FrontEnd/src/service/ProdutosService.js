import axios from '../config/Axios';

export const listar = () => axios.get('/listar');

export const cadastrar = object => axios.post('/cadastrar', object);
