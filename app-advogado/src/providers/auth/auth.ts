import { Injectable } from '@angular/core';
import { HttpProvider } from '../httpProvider/http.provider';
import { Config } from '../config';

@Injectable()
export class AuthProvider {
  public user: any;
  public server;

  constructor(private httpProvider: HttpProvider, public config: Config) {
    this.server = this.config.URL_UTILIZADA;
  }

  setUser(user){
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  destroyUser(){
    localStorage.removeItem('user');
  }

  destroySession(){
    localStorage.removeItem('session');
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  login(credentials){
    return this.httpProvider.post(this.server + 'auth/advogado/login?dontShowErrorMessage=true&dontShowLoading=true', {...credentials});
  }

  registrar(dados){
    return this.httpProvider.post(this.server + 'auth/advogado/registrar?dontShowErrorMessage=true&dontShowLoading=true', {...dados});
  }

  check(){
    return this.httpProvider.get(this.server + 'auth/advogado/info');
  }

  logout(){
    return this.httpProvider.put(this.server + 'auth/advogado/logout');
  }
}
