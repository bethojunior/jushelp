import { Injectable } from '@angular/core';
import { HttpProvider } from '../httpProvider/http.provider';
import { Config } from '../config';

@Injectable()
export class RelatoProvider {
    public server;

    constructor(private httpProvider: HttpProvider, public config: Config) {
        this.server = this.config.URL_UTILIZADA;
    }

    aceitar(relatoID) {
        return this.httpProvider.get(this.server + 'relato/' + relatoID + '/aceitar');
    }

    recusar(relatoID) {
        return this.httpProvider.get(this.server + 'relato/' + relatoID + '/recusar');
    }
}
