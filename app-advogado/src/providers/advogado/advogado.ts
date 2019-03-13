import { Injectable } from '@angular/core';
import { HttpProvider } from '../httpProvider/http.provider';
import { Config } from '../config';

@Injectable()
export class AdvogadoProvider {
  public server;

  constructor(private httpProvider: HttpProvider, public config: Config) {
    this.server = this.config.URL_UTILIZADA;
  }

  buscarRelatos(advID) {
    return this.httpProvider.get(this.server + 'advogado/' + advID + '/relatos');
  }
}
