import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpProvider {
    constructor(private http: HttpClient){ }

    get(url, params?){
        return this.http.get(url, {params});
    }

    post(url, data?){
        return this.http.post(url, data);
    }

    put(url, data?){
        return this.http.put(url, data);
    }

    del(url, data?){
        return this.http.delete(url, data);
    }
}
