import axios, { AxiosPromise } from "axios";

interface HasId {
    id?: number;
}

export class Sync<T extends HasId> {
    constructor(public rootUrl: string) {}

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;
        const usrData = data;

        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, usrData);
        } else {
            return  axios.post(this.rootUrl, usrData)
        }
    }
}