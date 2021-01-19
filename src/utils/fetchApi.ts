import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface FetchApiType<RC, R> {
    get: (url: string, config?: RC) => Promise<R>;
    post: (url: string, data?: any, config?: RC) => Promise<R>;
    delete: (url: string, config?: RC) => Promise<R>;
    put: (url: string, data?: any, config?: RC) => Promise<R>;
}

export interface FetchApiResponseType<T> {
    data: T;
    status: number;
    headers: any;
    request?: any;
}

// current implementation with Axios library
const fetchApi: FetchApiType<AxiosRequestConfig, AxiosResponse> = {
    get: (url, config) => {
        return axios.get(url, config);
    },
    post: (url, data, config) => {
        return axios.post(url, data, config);
    },
    delete: (url, config) => {
        return axios.delete(url, config);
    },
    put: (url, data, config) => {
        return axios.put(url, data, config);
    }
};

export default fetchApi;
