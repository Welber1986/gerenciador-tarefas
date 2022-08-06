import axios, {Method} from 'axios';
import { METHODS } from 'http';

export const executeRequest = (endpoint : string, method : Method, body?: any) => {
    const headers = {'Content-type' : 'application/json'} as any;

    const URL = 'http://localhost:3000/api/' +endpoint;
    console.log(`Executando:${URL}, método: ${method}, body: ${body}`);
    return axios.request({
        url: URL,
        method,
        data : body ? body : '',
        headers,
        timeout: 30000
    });
}