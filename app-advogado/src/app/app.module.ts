import { AudioProvider } from './../providers/AudioProvider';
import { RelatoProvider } from './../providers/relato/relato';
import { RelatoInfoPage } from './../pages/modals/relato-info/relato-info';
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';

import { RelatosPage } from './../pages/relatos/relatos';
import { ProcessosPage } from './../pages/processos/processos';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';
import { NotificacaoPage } from '../pages/notificacao/notificacao';
import { AlterarNumeroPage } from '../pages/modals/alterar-numero/alterar-numero';
import { AlterarDadosPessoaisPage } from '../pages/modals/alterar-dados-pessoais/alterar-dados-pessoais';
import { AlterarEmailPage } from '../pages/modals/alterar-email/alterar-email';
import { AlterarEnderecoPage } from '../pages/modals/alterar-endereco/alterar-endereco';
import { AlterarNotificacoesPage } from '../pages/modals/alterar-notificacoes/alterar-notificacoes';
import { AlterarSenhaPage } from '../pages/modals/alterar-senha/alterar-senha';
import { PrivacidadePage } from '../pages/modals/privacidade/privacidade';
import { RegistrarPage } from '../pages/registrar/registrar';

import ptBr from '@angular/common/locales/pt';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from '../providers/httpProvider/http.interceptor';
import { registerLocaleData } from '@angular/common';
import { UtilsServiceProvider } from '../providers/utils-service/utils-service';
import { HttpProvider } from '../providers/httpProvider/http.provider';
import { Config } from '../providers/config';
import { PipesModule } from '../pipes/pipes.module';

import { AdvogadoProvider } from '../providers/advogado/advogado';
import { ComboProvider } from '../providers/combo/combo';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    MyApp,
    NotificacoesPage,
    PerfilPage,
    TabsPage,
    ProcessosPage,
    LoginPage,
    IntroPage,
    RegistrarPage,
    NotificacaoPage,
    AlterarDadosPessoaisPage,
    AlterarEmailPage,
    AlterarEnderecoPage,
    AlterarNotificacoesPage,
    AlterarNumeroPage,
    AlterarSenhaPage,
    PrivacidadePage,
    RelatosPage,
    RelatoInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    HttpClientModule,
    PipesModule,
    BrMaskerModule,
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificacoesPage,
    PerfilPage,
    TabsPage,
    ProcessosPage,
    LoginPage,
    IntroPage,
    RegistrarPage,
    NotificacaoPage,
    AlterarDadosPessoaisPage,
    AlterarEmailPage,
    AlterarEnderecoPage,
    AlterarNotificacoesPage,
    AlterarNumeroPage,
    AlterarSenhaPage,
    PrivacidadePage,
    RelatosPage,
    RelatoInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    HttpProvider,
    AuthProvider,
    AdvogadoProvider,
    ComboProvider,
    Config,
    UtilsServiceProvider,
    RelatoProvider,
    AudioProvider
  ]
})
export class AppModule {}
