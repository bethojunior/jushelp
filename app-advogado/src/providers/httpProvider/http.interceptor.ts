import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
// import { Network } from '@ionic-native/network';
import { LoadingController, Events } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(
      // public net: Network,
      public events: Events,
      public auth: AuthProvider,
      public alert: AlertController,
      public toastCtrl: ToastController,
      public loadingCtrl: LoadingController,
    ){ }

    getQueryStrings(url){
        let querys = url.split('?')[1];
        if(!querys) return {};
        let result = {};

        querys.split('&').forEach(item => {
            let i = item.split('=');
            result[i[0]] = i[1] == 'true' ? true : i[1] == 'false' ? false : i[1];
        });

        return result;
    }

    isConnected(): boolean {
        // let conntype = this.net.type;
        // return conntype && conntype !== 'unknown' && conntype !== 'none';
        return true;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });

        // Comentar esse if para desenvolvimento
        // if(!this.isConnected()){
        //     const toast = this.toastCtrl.create({
        //         message: 'Sem conexão, verifique se seu aparelho está conectado à internet!',
        //         duration: 4000
        //       });

        //     toast.present();
        //     return;
        // };

        // let request = req.clone({headers: req.headers.set('token', this.auth.getUser().token)});
        // this.auth.getUser() && request.headers.append('authentication', this.auth.getUser().token);
        let request;
      if ((req.url.indexOf('login') !== -1) || req.url.indexOf('registrar') !== -1){
            request = req.clone({});
        }else{
            request = req.clone({headers: req.headers.set('Authorization', this.auth.getUser() ? 'Bearer '+this.auth.getUser().token : 'null')});
        }

        let queryParams = this.getQueryStrings(request.url);

        if(!queryParams['dontShowLoading']){
            loading.present();
        }

        return next.handle(request).do((event: HttpEvent<any>) => {
            if(event instanceof HttpResponse){
                //TODO - MANIPULAR RESPOSTA
                loading.dismiss();
            }
            },
            (error: any) => {
                if(error instanceof HttpErrorResponse){
                    //TODO - MANIPULAR STATUS DE ERRO
                    if(error.status == 401){
                        // this.events.publish('user:forceLogin');

                        if (req.url.indexOf('login') !== -1 || req.url.indexOf('info') !== -1) {
                          // Do nothing
                        } else {
                          const _alert = this.alert.create({
                              title: 'Tempo de acesso esgotado!',
                              message: 'O tempo de login expirou, você precisa relogar para continuar acessando!',
                              buttons: [
                                {
                                  text: 'OK',
                                  handler: () => {
                                      this.events.publish('user:forceLogout');
                                  }
                                }
                              ],
                              enableBackdropDismiss: false
                            });
                            _alert.present();
                          }
                    }
                    else if(error.status == 500){
                        const _alert = this.alert.create({
                            title: 'Erro no servidor',
                            message: 'Problema interno no servidor, tente novamente!',
                            buttons: [
                              {
                                text: 'OK',
                                handler: () => {

                                }
                              }
                            ],
                            enableBackdropDismiss: false
                          });
                          _alert.present();
                    }else{
                        const _alert = this.alert.create({
                            title: 'Falha!',
                            message: error.error.message || error.error.msg,
                            buttons: [
                                {
                                text: 'OK',
                                handler: () => {

                                }
                                }
                            ],
                            enableBackdropDismiss: false
                        });

                        if(queryParams['dontShowErrorMessage'] === true){
                            loading.dismiss();
                        }else{
                            _alert.present();
                        }

                }

                loading.dismiss();

                }

        });
    }

}
