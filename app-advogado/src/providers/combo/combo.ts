import { Injectable } from '@angular/core';
import { HttpProvider } from '../httpProvider/http.provider';
import { Config } from '../config';

@Injectable()
export class ComboProvider {
  public server;

  constructor(private httpProvider: HttpProvider, public config: Config) {
    this.server = this.config.URL_UTILIZADA;
  }

  cidades(params) {
    return this.httpProvider.get(this.server + 'combos/cidades', {...params});
  }
}
