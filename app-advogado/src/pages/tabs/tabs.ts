import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { RelatosPage } from '../relatos/relatos';
import { ProcessosPage } from './../processos/processos';
import { NotificacoesPage } from '../notificacoes/notificacoes';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  totalNotificacoes = 0;
  totalProcessos = 0;
  interval: Observable<number>;

  tab1Root = RelatosPage;
  tab2Root = ProcessosPage;
  tab3Root = NotificacoesPage;
  tab4Root = PerfilPage;

  constructor() {
    // this.interval = Observable.interval(60000);
    // this.interval.subscribe(() => {
    //   console.log("Atualize o total de notificações");
    //   console.log("Atualize o total de entrevistas");
    //   this.totalNotificacoes++;
    //   this.totalProcessos++;
    // });
  }

  ionViewWillLeave(){
    // this.interval.unsubscribe(); TODO
  }
}
