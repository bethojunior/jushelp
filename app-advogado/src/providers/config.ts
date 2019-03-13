import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    public BASE_URL_PROD = 'http://192.168.1.7:8080/api/';
    public proxy = "/api/";

    // public URL_UTILIZADA = this.BASE_URL_PROD;
    public URL_UTILIZADA = this.proxy;

    constructor(){ }

}
