webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrar_registrar__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    IntroPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    IntroPage.prototype.gotoRegistrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registrar_registrar__["a" /* RegistrarPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/intro/intro.html"*/'<ion-content text-center class="vertical-align-content">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <ion-avatar>\n              <img src="assets/imgs/logo.png" alt="">\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n\n        <div class="app-name">Advogado</div>\n\n        <button class="btn" (click)="gotoLogin()">Já sou cadastrado</button>\n        <button class="btn btn-welcome" (click)="gotoRegistrar()">Criar minha conta</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/intro/intro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrarPage = /** @class */ (function () {
    function RegistrarPage(navCtrl, formBuilder, loadingCtrl, toastCtrl, auth) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.stepNum = 1;
        this.validation_messages = {
            'nome': [
                { type: 'required', message: 'O Nome é obrigatório!' }
            ],
            'cpf': [
                { type: 'required', message: 'O CPF é obrigatório!' },
                { type: 'pattern', message: 'O formato do CPF está inválido!' }
            ],
            'rg': [
                { type: 'required', message: 'O RG é obrigatório!' },
                { type: 'pattern', message: 'O RG é somente numérico!' }
            ],
            'oab': [
                { type: 'required', message: 'A Carteira da OAB é obrigatória!' }
            ],
            'data_nasc': [
                { type: 'required', message: 'A Data de Nascimento é obrigatória!' }
            ],
            'email': [
                { type: 'required', message: 'O E-Mail é obrigatório!' },
                { type: 'pattern', message: 'O formato de E-Mail é inválido!' }
            ],
            'celular': [
                { type: 'required', message: 'O Número de Celular é obrigatório!' }
            ],
            'cep': [
                { type: 'required', message: 'O CEP é obrigatório!' },
                { type: 'pattern', message: 'O formato de CEP é inválido!' }
            ],
            'numero': [
                { type: 'required', message: 'O Número do endereço é obrigatório!' }
            ],
            'logradouro': [
                { type: 'required', message: 'O Logradouro é obrigatório!' },
                { type: 'pattern', message: 'O Logradouro deve ter no minimo 3 caracteres!' }
            ],
            'bairro': [
                { type: 'required', message: 'O Bairro é obrigatório!' },
                { type: 'pattern', message: 'O Bairro deve ter no minimo 3 caracteres!' }
            ],
            'complemento': [
                { type: 'required', message: 'O Complemento é obrigatório!' },
                { type: 'pattern', message: 'O Complemento deve ter no minimo 3 caracteres!' }
            ],
            'pt_referencia': [
                { type: 'pattern', message: 'O Ponto de Referência deve ter no minimo 3 caracteres!' }
            ],
            'senha': [
                { type: 'required', message: 'O Senha é obrigatória!' },
                { type: 'pattern', message: 'A senha deve ter no minimo 6 caracteres!' }
            ],
        };
        this.pageTitle = 'Dados Pessoais';
        // Vamos criar o form dos dados pessoais
        this.formDadosPessoais = this.formBuilder.group({
            nome: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            cpf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}')
            ])),
            rg: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]+')
            ])),
            oab: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            data_nasc: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        });
        // Vamos criar o form dos contatos
        this.formContato = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            celular: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]))
        });
        // Vamos criar o form do endereco
        this.formEndereco = this.formBuilder.group({
            cep: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]{5}\-[0-9]{3}')
            ])),
            numero: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            logradouro: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            bairro: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            complemento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            pt_referencia: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
        });
        // Vamos criar o form da senha
        this.formSenha = this.formBuilder.group({
            senha: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]))
        });
    }
    RegistrarPage.prototype.nextStep = function () {
        if (this.stepNum == 4)
            return;
        this.stepNum++;
        if (this.stepNum == 2) {
            this.pageTitle = "Contatos";
        }
        if (this.stepNum == 3) {
            this.pageTitle = "Endereço";
        }
        if (this.stepNum == 4) {
            this.pageTitle = "Crie uma senha";
        }
    };
    RegistrarPage.prototype.salvar = function () {
        var _this = this;
        if (this.formDadosPessoais.valid && this.formContato.valid && this.formEndereco.valid && this.formSenha.valid) {
            var dadosCadastro_1 = {
                nome: this.formDadosPessoais.value.nome,
                cpf: this.formDadosPessoais.value.cpf,
                rg: this.formDadosPessoais.value.rg,
                data_nasc: this.formDadosPessoais.value.data_nasc,
                carteira_oab: this.formDadosPessoais.value.oab,
                email: this.formContato.value.email,
                numero: this.formContato.value.celular,
                senha: this.formSenha.value.senha,
                endereco: {
                    cep: this.formEndereco.value.cep,
                    logradouro: this.formEndereco.value.logradouro,
                    numero: this.formEndereco.value.numero,
                    bairro: this.formEndereco.value.bairro,
                    complemento: this.formEndereco.value.complemento,
                    pt_referencia: this.formEndereco.value.pt_referencia
                },
                lat: -5.20192,
                lng: -37.3697527,
            };
            var loading_1 = this.loadingCtrl.create({
                content: 'Registrando, por favor aguarde...'
            });
            loading_1.present();
            // Realizando login com os dados digitados
            this.auth.registrar(dadosCadastro_1)
                .subscribe(function (dados) {
                // Realizando login com os dados digitados
                _this.auth.login({ email: dadosCadastro_1.email, senha: dadosCadastro_1.senha })
                    .subscribe(function (loginDados) {
                    _this.auth.setUser(loginDados);
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
                }, function (error) {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: (error && error.error && error.error.msg) || "Resposta não localizada",
                        duration: 4000
                    });
                    toast.present();
                });
            }, function (error) {
                loading_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: (error && error.error && error.error.msg) || "Resposta não localizada",
                    duration: 4000
                });
                toast.present();
            });
        }
    };
    RegistrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-registrar',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/registrar/registrar.html"*/'<ion-header no-border>\n  <ion-navbar color="light">\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="steps">\n    <div class="step" *ngIf="stepNum==1">\n      <form [formGroup]="formDadosPessoais">\n        <div class="form-inputs">\n          <ion-list>\n            <ion-item>\n              <ion-label floating>Nome</ion-label>\n              <ion-input formControlName="nome" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.nome">\n                <div class="error-message" *ngIf="formDadosPessoais.get(\'nome\').hasError(validation.type) && (formDadosPessoais.get(\'nome\').dirty || formDadosPessoais.get(\'nome\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>CPF</ion-label>\n              <ion-input formControlName="cpf" [brmasker]="{mask:\'000.000.000-00\', len:14}" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.cpf">\n                <div class="error-message" *ngIf="formDadosPessoais.get(\'cpf\').hasError(validation.type) && (formDadosPessoais.get(\'cpf\').dirty || formDadosPessoais.get(\'cpf\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>RG</ion-label>\n              <ion-input formControlName="rg" type="number"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.rg">\n                <div class="error-message" *ngIf="formDadosPessoais.get(\'rg\').hasError(validation.type) && (formDadosPessoais.get(\'rg\').dirty || formDadosPessoais.get(\'rg\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>Carteira da OAB</ion-label>\n              <ion-input formControlName="oab" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.oab">\n                <div class="error-message" *ngIf="formDadosPessoais.get(\'oab\').hasError(validation.type) && (formDadosPessoais.get(\'oab\').dirty || formDadosPessoais.get(\'oab\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>Data de Nascimento</ion-label>\n              <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="data_nasc"></ion-datetime>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.data_nasc">\n                <div class="error-message" *ngIf="formDadosPessoais.get(\'data_nasc\').hasError(validation.type) && (formDadosPessoais.get(\'data_nasc\').dirty || formDadosPessoais.get(\'data_nasc\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </ion-list>\n        </div>\n\n        <ul class="dots">\n          <li [class.active]="stepNum==1" class="dot"></li>\n          <li [class.active]="stepNum==2" class="dot"></li>\n          <li [class.active]="stepNum==3" class="dot"></li>\n          <li [class.active]="stepNum==4" class="dot"></li>\n        </ul>\n\n        <button class="btn" (click)="nextStep()" [disabled]="!formDadosPessoais.valid">PRÓXIMO</button>\n      </form>\n    </div>\n\n    <div class="step" *ngIf="stepNum==2">\n      <form [formGroup]="formContato">\n        <div class="form-inputs" padding>\n          <ion-list>\n            <ion-item>\n              <ion-label floating>E-Mail</ion-label>\n              <ion-input formControlName="email" type="email"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.email">\n                <div class="error-message" *ngIf="formContato.get(\'email\').hasError(validation.type) && (formContato.get(\'email\').dirty || formContato.get(\'email\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>Celular</ion-label>\n              <ion-input formControlName="celular" [brmasker]="{mask:\'(00) 00000-0000\', len:15}" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.celular">\n                <div class="error-message" *ngIf="formContato.get(\'celular\').hasError(validation.type) && (formContato.get(\'celular\').dirty || formContato.get(\'celular\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </ion-list>\n        </div>\n\n        <ul class="dots">\n          <li [class.active]="stepNum==1" class="dot"></li>\n          <li [class.active]="stepNum==2" class="dot"></li>\n          <li [class.active]="stepNum==3" class="dot"></li>\n          <li [class.active]="stepNum==4" class="dot"></li>\n        </ul>\n\n        <button class="btn" (click)="nextStep()" [disabled]="!formContato.valid">PRÓXIMO</button>\n      </form>\n    </div>\n\n    <div class="step" *ngIf="stepNum==3" style="padding-bottom: 60px;">\n      <form [formGroup]="formEndereco">\n        <div class="form-inputs" padding>\n          <ion-list>\n            <ion-item>\n              <ion-label floating>CEP</ion-label>\n              <ion-input formControlName="cep" [brmasker]="{mask:\'00000-000\', len:9}" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.cep">\n                <div class="error-message" *ngIf="formEndereco.get(\'cep\').hasError(validation.type) && (formEndereco.get(\'cep\').dirty || formEndereco.get(\'cep\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>Número</ion-label>\n              <ion-input formControlName="numero" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.numero">\n                <div class="error-message" *ngIf="formEndereco.get(\'numero\').hasError(validation.type) && (formEndereco.get(\'numero\').dirty || formEndereco.get(\'numero\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>Endereço</ion-label>\n              <ion-input formControlName="logradouro" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.logradouro">\n                <div class="error-message" *ngIf="formEndereco.get(\'logradouro\').hasError(validation.type) && (formEndereco.get(\'logradouro\').dirty || formEndereco.get(\'logradouro\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>Bairro</ion-label>\n              <ion-input formControlName="bairro" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.bairro">\n                <div class="error-message" *ngIf="formEndereco.get(\'bairro\').hasError(validation.type) && (formEndereco.get(\'bairro\').dirty || formEndereco.get(\'bairro\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>Complemento</ion-label>\n              <ion-input formControlName="complemento" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.complemento">\n                <div class="error-message" *ngIf="formEndereco.get(\'complemento\').hasError(validation.type) && (formEndereco.get(\'complemento\').dirty || formEndereco.get(\'complemento\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label floating>Ponto de Referência</ion-label>\n              <ion-input formControlName="pt_referencia" type="text"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.pt_referencia">\n                <div class="error-message" *ngIf="formEndereco.get(\'pt_referencia\').hasError(validation.type) && (formEndereco.get(\'pt_referencia\').dirty || formEndereco.get(\'pt_referencia\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </ion-list>\n        </div>\n\n        <ul class="dots">\n          <li [class.active]="stepNum==1" class="dot"></li>\n          <li [class.active]="stepNum==2" class="dot"></li>\n          <li [class.active]="stepNum==3" class="dot"></li>\n          <li [class.active]="stepNum==4" class="dot"></li>\n        </ul>\n\n        <button class="btn" (click)="nextStep()" [disabled]="!formEndereco.valid">PRÓXIMO</button>\n      </form>\n    </div>\n\n    <div class="step" *ngIf="stepNum==4" style="padding-bottom: 60px;">\n      <form [formGroup]="formSenha">\n        <div class="form-inputs" padding>\n          <ion-list>\n            <ion-item>\n              <ion-label floating>Senha</ion-label>\n              <ion-input formControlName="senha" type="password"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.senha">\n                <div class="error-message" *ngIf="formSenha.get(\'senha\').hasError(validation.type) && (formSenha.get(\'senha\').dirty || formSenha.get(\'senha\').touched)">\n                  <ion-icon name=""></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </ion-list>\n        </div>\n\n        <ul class="dots">\n          <li [class.active]="stepNum==1" class="dot"></li>\n          <li [class.active]="stepNum==2" class="dot"></li>\n          <li [class.active]="stepNum==3" class="dot"></li>\n          <li [class.active]="stepNum==4" class="dot"></li>\n        </ul>\n\n        <button class="btn" (click)="salvar()" [disabled]="!formSenha.valid">ENVIAR</button>\n      </form>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/registrar/registrar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], RegistrarPage);
    return RegistrarPage;
}());

//# sourceMappingURL=registrar.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatoInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelatoInfoPage = /** @class */ (function () {
    function RelatoInfoPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    /**
     * close
     */
    RelatoInfoPage.prototype.close = function () {
        this.view.dismiss();
    };
    RelatoInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-relato-info',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/relato-info/relato-info.html"*/'<div class="overlay" (click)="close()">&nbsp;</div>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-label item-left style="float: left; font-size: 22px; margin: 0;">Dados do Relato</ion-label>\n      <div class="clearfix"></div>\n    </ion-col>\n    <ion-col (click)="close()">\n      <ion-icon name="close" style="float: right;"></ion-icon>\n      <div class="clearfix"></div>\n    </ion-col>\n  </ion-row>\n\n  <div class="audio">\n    <div class="icone">\n      <img src="../../../assets/imgs/speaker.png" alt="">\n    </div>\n    <span>Toque no icone para escutar o áudio do relato</span>\n  </div>\n\n  <button style="margin-top: 40px" ion-button color="green" type="button" block>Aceitar</button>\n  <button style="margin-top: 40px" ion-button color="danger" type="button" block>Recusar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/relato-info/relato-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], RelatoInfoPage);
    return RelatoInfoPage;
}());

//# sourceMappingURL=relato-info.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modals_relato_info_relato_info__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_advogado_advogado__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RelatosPage = /** @class */ (function () {
    function RelatosPage(auth, advService, toastCtrl, modalCtrl) {
        this.auth = auth;
        this.advService = advService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.data = [];
        this.loadItens();
    }
    RelatosPage.prototype.loadItens = function () {
        var _this = this;
        this.data = [];
        for (var index = 0; index < 10; index++) {
            var especialidadeNome = 'Não sei';
            if (index == 3) {
                especialidadeNome = 'Trabalhista';
            }
            if (index == 6) {
                especialidadeNome = 'Bancos';
            }
            this.data.push({
                cliente: '3depmfrmgpvorpigrpop',
                advogado: 'drknnfkrmglkrmkrmlkgmm',
                relato: {
                    _id: 'pelmfmpkrmlr,kfmrmpofkopo',
                    cliente: '3depmfrmgpvorpigrpop',
                    texto: 'Relato de teste',
                    url_audio: null,
                    especialidade: {
                        _id: 'lkejnpljhfóeonf',
                        nome: especialidadeNome
                    },
                    estado: 'Pendente'
                }
            });
        }
        return;
        this.advService.buscarRelatos(this.auth.getUser()._id)
            .subscribe(function (dados) {
            _this.data = dados;
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: error && error.error.msg || "Resposta não localizada",
                duration: 4000
            });
            toast.present();
        });
    };
    RelatosPage.prototype.abrirRelato = function (relato) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__modals_relato_info_relato_info__["a" /* RelatoInfoPage */], {
            relato: relato
        });
        modal.onDidDismiss(function () {
            _this.loadItens();
        });
        modal.present();
    };
    RelatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-relatos',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/relatos/relatos.html"*/'<ion-content>\n  <div *ngIf="(!data || data.length == 0)" text-center style="padding-top: 12%;">\n    Sem Relatos\n  </div>\n\n  <ion-list lines="none" *ngIf="data && data.length > 0">\n    <ion-item *ngFor="let item of data" (click)="abrirRelato(item)">\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>{{item.relato.especialidade.nome}}</h3>\n        </div>\n        <!-- <p style="font-size: 12px; margin-top: 8px;">{{item.data}}</p> -->\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/relatos/relatos.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_advogado_advogado__["a" /* AdvogadoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_advogado_advogado__["a" /* AdvogadoProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object])
    ], RelatosPage);
    return RelatosPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=relatos.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvogadoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpProvider_http_provider__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvogadoProvider = /** @class */ (function () {
    function AdvogadoProvider(httpProvider, config) {
        this.httpProvider = httpProvider;
        this.config = config;
        this.server = this.config.URL_UTILIZADA;
    }
    AdvogadoProvider.prototype.buscarRelatos = function (advID) {
        return this.httpProvider.get(this.server + 'advogado/' + advID + '/relatos');
    };
    AdvogadoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpProvider_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], AdvogadoProvider);
    return AdvogadoProvider;
}());

//# sourceMappingURL=advogado.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessosPage = /** @class */ (function () {
    function ProcessosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProcessosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-processos',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/processos/processos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Processos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/processos/processos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ProcessosPage);
    return ProcessosPage;
}());

//# sourceMappingURL=processos.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notificacao_notificacao__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificacoesPage = /** @class */ (function () {
    function NotificacoesPage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dados = [];
        setTimeout(function () {
            for (var index = 0; index < 30; index++) {
                var data = new Date();
                data.setDate(data.getDate() + index);
                _this.dados.push({
                    id: index,
                    titulo: 'Notificação N° ' + (index + 1),
                    mensagem: [
                        'Quis aliqua culpa fugiat qui voluptate cupidatat ullamco mollit duis culpa tempor. Ullamco ipsum laborum esse consectetur sint irure cupidatat ut consequat aute minim cillum. Tempor et voluptate ex fugiat in pariatur occaecat irure reprehenderit cupidatat nostrud Lorem eiusmod. Mollit ex nisi sunt sit laboris exercitation consectetur consectetur. Adipisicing Lorem anim ex esse ut incididunt. Tempor eiusmod sit laborum fugiat magna aliqua Lorem in. Officia sint pariatur Lorem dolore aliqua dolore et excepteur ad in ea ad ullamco ullamco.',
                        'Eiusmod esse irure non ut occaecat. Ex aliqua pariatur nulla enim duis sit irure qui. Enim exercitation dolore ea do tempor proident in nostrud. Adipisicing sit ullamco eiusmod ut.',
                        'Cillum est irure ex magna sunt sit occaecat nostrud do sunt fugiat. Culpa laborum irure adipisicing nisi. Ullamco aliquip ut non sunt non et nulla tempor dolore nulla ullamco. Nostrud officia sunt exercitation sunt. Fugiat tempor ea dolore reprehenderit consequat ea. Tempor irure id consequat amet sunt et dolor et proident tempor et non consequat.',
                        'Dolore dolor ea cupidatat incididunt mollit do dolore mollit proident minim proident ad veniam eiusmod. In quis velit dolor pariatur proident in ut. Magna quis ut anim anim commodo nisi qui incididunt mollit nostrud est elit.',
                        'Quis aliqua culpa fugiat qui voluptate cupidatat ullamco mollit duis culpa tempor. Ullamco ipsum laborum esse consectetur sint irure cupidatat ut consequat aute minim cillum. Tempor et voluptate ex fugiat in pariatur occaecat irure reprehenderit cupidatat nostrud Lorem eiusmod. Mollit ex nisi sunt sit laboris exercitation consectetur consectetur. Adipisicing Lorem anim ex esse ut incididunt. Tempor eiusmod sit laborum fugiat magna aliqua Lorem in. Officia sint pariatur Lorem dolore aliqua dolore et excepteur ad in ea ad ullamco ullamco.',
                        'Eiusmod esse irure non ut occaecat. Ex aliqua pariatur nulla enim duis sit irure qui. Enim exercitation dolore ea do tempor proident in nostrud. Adipisicing sit ullamco eiusmod ut.',
                        'Cillum est irure ex magna sunt sit occaecat nostrud do sunt fugiat. Culpa laborum irure adipisicing nisi. Ullamco aliquip ut non sunt non et nulla tempor dolore nulla ullamco. Nostrud officia sunt exercitation sunt. Fugiat tempor ea dolore reprehenderit consequat ea. Tempor irure id consequat amet sunt et dolor et proident tempor et non consequat.',
                        'Dolore dolor ea cupidatat incididunt mollit do dolore mollit proident minim proident ad veniam eiusmod. In quis velit dolor pariatur proident in ut. Magna quis ut anim anim commodo nisi qui incididunt mollit nostrud est elit.'
                    ].join(' '),
                    data: data.toLocaleString(),
                    lido: false
                });
            }
        }, 2000);
    }
    /**
     * lerNotificacao
     */
    NotificacoesPage.prototype.lerNotificacao = function (notificacao) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notificacao_notificacao__["a" /* NotificacaoPage */], {
            notificacao: notificacao
        });
    };
    NotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificacoes',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/notificacoes/notificacoes.html"*/'<ion-content>\n  <div *ngIf="dados.length == 0" text-center style="padding-top: 12%;">\n    Sem Notificações\n  </div>\n\n  <ion-list lines="none" *ngIf="dados.length > 0">\n    <ion-item *ngFor="let item of dados" [ngClass]="{\'unread\': !item.lido, \'read\': item.lido}" (click)="lerNotificacao(item)">\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>{{item.titulo}}</h3>\n        </div>\n        <p style="font-size: 12px; margin-top: 8px;">{{item.data}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/notificacoes/notificacoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], NotificacoesPage);
    return NotificacoesPage;
}());

//# sourceMappingURL=notificacoes.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificacaoPage = /** @class */ (function () {
    function NotificacaoPage(navParams) {
        this.navParams = navParams;
        this.notificacao = navParams.get('notificacao');
    }
    NotificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificacao',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/notificacao/notificacao.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-wrap>\n      {{notificacao.titulo}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-justify>\n    {{notificacao.mensagem}}\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/notificacao/notificacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NotificacaoPage);
    return NotificacaoPage;
}());

//# sourceMappingURL=notificacao.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intro_intro__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_alterar_numero_alterar_numero__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_alterar_email_alterar_email__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_alterar_dados_pessoais_alterar_dados_pessoais__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_alterar_endereco_alterar_endereco__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_alterar_senha_alterar_senha__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_alterar_notificacoes_alterar_notificacoes__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_privacidade_privacidade__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, auth, modalController) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.modalController = modalController;
        this.userData = this.auth.getUser();
    }
    /**
     * logout
     */
    PerfilPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function () {
            _this.auth.destroyUser();
            _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_3__intro_intro__["a" /* IntroPage */]);
        });
    };
    /**
     * abrirModal
     */
    PerfilPage.prototype.abrirModal = function (kind) {
        var _this = this;
        var modal;
        if (kind == 'numero') {
            modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__modals_alterar_numero_alterar_numero__["a" /* AlterarNumeroPage */]);
        }
        if (kind == 'email') {
            modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_5__modals_alterar_email_alterar_email__["a" /* AlterarEmailPage */]);
        }
        if (kind == 'dados_pessoais') {
            modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__modals_alterar_dados_pessoais_alterar_dados_pessoais__["a" /* AlterarDadosPessoaisPage */]);
        }
        if (kind == 'endereco') {
            modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__modals_alterar_endereco_alterar_endereco__["a" /* AlterarEnderecoPage */]);
        }
        if (kind == 'senha') {
            modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_8__modals_alterar_senha_alterar_senha__["a" /* AlterarSenhaPage */]);
        }
        if (kind == 'notificacoes') {
            modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_9__modals_alterar_notificacoes_alterar_notificacoes__["a" /* AlterarNotificacoesPage */]);
        }
        if (kind == 'privacidade') {
            modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_10__modals_privacidade_privacidade__["a" /* PrivacidadePage */]);
        }
        modal.onDidDismiss(function () {
            _this.userData = _this.auth.getUser();
        });
        modal.present();
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/perfil/perfil.html"*/'<ion-content>\n  <div class="user-about">\n    <div class="user-img">\n      <img [src]="\'assets/imgs/no-user.png\'" alt="{{userData.nome}}">\n    </div>\n  </div>\n\n  <div text-center padding>\n    <p>{{userData.nome||\'\'}}</p>\n  </div>\n\n  <ion-list lines="none">\n    <ion-list-header>MINHA CONTA</ion-list-header>\n\n    <ion-item (click)="abrirModal(\'numero\')">\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>Meu número</h3>\n        </div>\n        <p>{{userData.numero | phone}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)="abrirModal(\'email\')">\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>Meu e-mail</h3>\n        </div>\n        <p>{{userData.email}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)="abrirModal(\'dados_pessoais\')">\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>Dados pessoais</h3>\n        </div>\n        <p>Nome, Documento e etc.</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)="abrirModal(\'endereco\')">\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>Meu endereço</h3>\n        </div>\n        <p>{{userData.endereco_logradouro + \', \' + userData.endereco_numero}}</p>\n      </ion-label>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Configurações</ion-list-header>\n\n    <ion-item (click)="abrirModal(\'senha\')">\n      <ion-label text-wrap>\n        <h3>Alterar senha</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)="abrirModal(\'notificacoes\')">\n      <ion-label text-wrap>\n        <h3>Notificações</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item (click)="abrirModal(\'privacidade\')">\n      <ion-label text-wrap>\n        <h3>Privacidade</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item-divider></ion-item-divider>\n\n    <ion-item (click)="logout()">\n      <ion-label text-wrap>\n        <h3>Sair</h3>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/perfil/perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registrar_registrar__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(toastCtrl, navCtrl, auth, events, alertCtrl, loadingCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.credentials = {
            email: '',
            senha: ''
        };
        events.subscribe('user:forceLogout', function () {
            _this.auth.destroyUser();
            _this.auth.destroySession();
            _this.navCtrl.goToRoot({});
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.content = document.getElementsByClassName('login-bg')[0];
    };
    LoginPage.prototype.scrollLoginContentTop = function (tipo) {
        var _this = this;
        // let loginInput = document.getElementById('loginInput');
        // let passwordInput = document.getElementById('passwordInput');
        setTimeout(function () {
            _this.content.scrollTop = 600;
            // if (tipo == 'login') {
            //   loginInput.click();
            // } else {
            //   passwordInput.click();
            // }
        }, 500);
    };
    LoginPage.prototype.gotoRegistrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registrar_registrar__["a" /* RegistrarPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Entrando, por favor aguarde...'
        });
        loading.present();
        // Realizando login com os dados digitados
        this.auth.login(this.credentials)
            .subscribe(function (dados) {
            _this.auth.setUser(dados);
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: error && error.error.msg || "Resposta não localizada",
                duration: 4000
            });
            toast.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/login/login.html"*/'<ion-header no-border>\n  <ion-navbar color="transparent">\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content id="login-content" class="login-bg no-scroll">\n  <div class="login-content">\n    <img src="assets/imgs/logo.png">\n\n    <div>\n      <div style="position: relative">\n        <ion-icon style="position: absolute; font-size: 2em; top: 14px; left: 14px" color="white" name="ios-mail"></ion-icon>\n        <input id="loginInput" (focus)="scrollLoginContentTop(\'login\')" (keyup.enter)="login()" type="email" placeholder="Digite seu E-mail"\n          [(ngModel)]="credentials.email">\n      </div>\n      <div style="position: relative">\n        <ion-icon style="position: absolute; font-size: 2em; top: 14px; left: 14px" color="white" name="ios-lock-outline"></ion-icon>\n        <input id="passwordInput" (focus)="scrollLoginContentTop(\'password\')" (keyup.enter)="login()" type="password"\n          placeholder="Digite sua Senha" [(ngModel)]="credentials.senha">\n      </div>\n\n      <button ion-button block color="secondary" class="login-button" (click)="login()">Entrar</button>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarNumeroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlterarNumeroPage = /** @class */ (function () {
    function AlterarNumeroPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    /**
     * close
     */
    AlterarNumeroPage.prototype.close = function () {
        this.view.dismiss();
    };
    AlterarNumeroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alterar-numero',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-numero/alterar-numero.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Alterar Número de Celular</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()" style="margin-right: 16px;">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <div text-center style="font-size: 18px; margin-top: 30px">\n    Seu número atual é <br/>\n    <p style="font-weight: bold;">{{userData.cliente.numero | phone}}</p>\n  </div>\n\n  <ion-list>\n    <form novalidate [formGroup]="form" (submit)="salvar()">\n\n      <ion-item>\n        <ion-label stacked>Digite o seu novo número</ion-label>\n        <ion-input formControlName="celular" type="text" name="phone" placeholder="Número do celular" [brmasker]="{mask:\'(00) 00000-0000\', len:15}"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor="let validation of validation_messages.numero">\n          <div *ngIf="form.get(\'celular\').hasError(validation.type)">\n            <p>{{validation.message}}</p>\n          </div>\n        </ng-container>\n      </div>\n\n      <button style="margin-top: 40px" ion-button type="submit" block>Salvar</button>\n    </form>\n  </ion-list> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-numero/alterar-numero.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AlterarNumeroPage);
    return AlterarNumeroPage;
}());

//# sourceMappingURL=alterar-numero.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlterarEmailPage = /** @class */ (function () {
    function AlterarEmailPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    /**
     * close
     */
    AlterarEmailPage.prototype.close = function () {
        this.view.dismiss();
    };
    AlterarEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alterar-email',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-email/alterar-email.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Alterar E-Mail</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()" style="margin-right: 16px;">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <div text-center style="font-size: 18px; margin-top: 30px">\n    Seu e-mail atual é <br />\n    <p style="font-weight: bold;">{{userData.advogado.email}}</p>\n  </div>\n\n  <ion-list>\n    <form novalidate [formGroup]="form" (submit)="salvar()">\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input [(ngModel)]="newEmail" type="text" formControlName="email" [class.error1]="!form.controls.email.valid && form.controls.email.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( form.get(\'email\').hasError(\'minlength\') || form.get(\'email\').hasError(\'pattern\') ||form.get(\'email\').hasError(\'required\') ) && form.get(\'email\').touched">\n        <div class="error" *ngIf="form.get(\'email\').hasError(\'required\') && form.get(\'email\').touched">\n          Por favor insira seu e-mail!\n        </div>\n        <div class="error" *ngIf="form.get(\'email\').hasError(\'pattern\') && form.get(\'email\').touched">\n          E-Mail inválido!\n        </div>\n      </ion-item>\n\n      <button style="margin-top: 40px" ion-button type="submit" block>Salvar</button>\n    </form>\n  </ion-list> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-email/alterar-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AlterarEmailPage);
    return AlterarEmailPage;
}());

//# sourceMappingURL=alterar-email.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarDadosPessoaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlterarDadosPessoaisPage = /** @class */ (function () {
    function AlterarDadosPessoaisPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    /**
    * close
    */
    AlterarDadosPessoaisPage.prototype.close = function () {
        this.view.dismiss();
    };
    AlterarDadosPessoaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alterar-dados-pessoais',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-dados-pessoais/alterar-dados-pessoais.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Dados Pessoais</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()" style="margin-right: 16px;">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines="none">\n\n    <!-- <ion-item>\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>Nome</h3>\n        </div>\n        <p>{{userData.cliente.nome}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>CPF</h3>\n        </div>\n        <p>{{userData.cliente.cpf}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label text-wrap>\n        <div color="primary">\n          <h3>RG</h3>\n        </div>\n        <p>{{userData.cliente.rg}}</p>\n      </ion-label>\n    </ion-item> -->\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-dados-pessoais/alterar-dados-pessoais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AlterarDadosPessoaisPage);
    return AlterarDadosPessoaisPage;
}());

//# sourceMappingURL=alterar-dados-pessoais.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarEnderecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlterarEnderecoPage = /** @class */ (function () {
    function AlterarEnderecoPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    /**
     * close
     */
    AlterarEnderecoPage.prototype.close = function () {
        this.view.dismiss();
    };
    AlterarEnderecoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alterar-endereco',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-endereco/alterar-endereco.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Alterar Endereço</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()" style="margin-right: 16px;">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-list style="margin-top: 30px;">\n\n    <ion-item>\n      <ion-label floating>Cidade</ion-label>\n      <select-searchable\n        item-content [(ngModel)]="cidadeSelecionada" [items]="cidades"\n        itemValueField="id"\n        itemTextField="nome"\n        [canSearch]="true"\n        headerColor="primary"\n        placeholder="Selecione sua cidade"\n        searchPlaceholder="Pesquise aqui por sua cidade"\n        searchFailText="Nenhuma cidade encontrada"\n        (onChange)="onCityChanged($event)"\n        (onSearch)="pesquisarCidades($event)">\n          <ng-template ionicSelectableSearchFailTemplate>\n            <div padding>\n              Nenhuma cidade encontrada\n            </div>\n          </ng-template>\n          <ng-template ionicSelectablePlaceholderTemplate>\n            Pesquise por sua cidade\n          </ng-template>\n      </select-searchable>\n    </ion-item>\n\n    <form novalidate [formGroup]="form" (submit)="salvar()">\n\n      <ion-item>\n        <ion-label floating>CEP</ion-label>\n        <ion-input [(ngModel)]="novoEndereco.cep" type="text" formControlName="cep" [class.error1]="!form.controls.cep.valid && form.controls.cep.dirty" [brmasker]="{mask:\'00000-000\', len:9}"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( form.get(\'cep\').hasError(\'minlength\') || form.get(\'cep\').hasError(\'maxlength\') ||form.get(\'cep\').hasError(\'pattern\') ||form.get(\'cep\').hasError(\'required\') ) && form.get(\'cep\').touched">\n        <div class="error" *ngIf="form.get(\'cep\').hasError(\'required\') && form.get(\'cep\').touched">\n          CEP é obrigatório!\n        </div>\n        <div class="error" *ngIf="form.get(\'cep\').hasError(\'pattern\') && form.get(\'cep\').touched">\n          Formato do CEP inválido!\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Logradouro</ion-label>\n        <ion-input [(ngModel)]="novoEndereco.logradouro" type="text" formControlName="logradouro" [class.error1]="!form.controls.logradouro.valid && form.controls.logradouro.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( form.get(\'logradouro\').hasError(\'minlength\') || form.get(\'logradouro\').hasError(\'maxlength\') ||form.get(\'logradouro\').hasError(\'pattern\') ||form.get(\'logradouro\').hasError(\'required\') ) && form.get(\'logradouro\').touched">\n        <div class="error" *ngIf="form.get(\'logradouro\').hasError(\'required\') && form.get(\'logradouro\').touched">\n          Logradouro é obrigatório!\n        </div>\n        <div class="error" *ngIf="form.get(\'logradouro\').hasError(\'minlength\') && form.get(\'logradouro\').touched">\n          Tamanho mínimo para o logradouro é 3 caracteres!\n        </div>\n        <div class="error" *ngIf="form.get(\'logradouro\').hasError(\'maxlength\') && form.get(\'logradouro\').touched">\n          Tamanho máximo para o logradouro é 255 caracteres!\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Bairro</ion-label>\n        <ion-input [(ngModel)]="novoEndereco.bairro" type="text" formControlName="bairro" [class.error1]="!form.controls.bairro.valid && form.controls.bairro.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( form.get(\'bairro\').hasError(\'minlength\') || form.get(\'bairro\').hasError(\'maxlength\') ||form.get(\'bairro\').hasError(\'pattern\') ||form.get(\'bairro\').hasError(\'required\') ) && form.get(\'bairro\').touched">\n        <div class="error" *ngIf="form.get(\'bairro\').hasError(\'required\') && form.get(\'bairro\').touched">\n          Bairro é obrigatório!\n        </div>\n        <div class="error" *ngIf="form.get(\'bairro\').hasError(\'minlength\') && form.get(\'bairro\').touched">\n          Tamanho mínimo para o bairro é 3 caracteres!\n        </div>\n        <div class="error" *ngIf="form.get(\'bairro\').hasError(\'maxlength\') && form.get(\'bairro\').touched">\n          Tamanho máximo para o bairro é 100 caracteres!\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Número</ion-label>\n        <ion-input [(ngModel)]="novoEndereco.numero" type="number" formControlName="numero" [class.error1]="!form.controls.numero.valid && form.controls.numero.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( form.get(\'numero\').hasError(\'minlength\') || form.get(\'numero\').hasError(\'maxlength\') ||form.get(\'numero\').hasError(\'pattern\') ||form.get(\'numero\').hasError(\'required\') ) && form.get(\'numero\').touched">\n        <div class="error" *ngIf="form.get(\'numero\').hasError(\'required\') && form.get(\'numero\').touched">\n          Número é obrigatório!\n        </div>\n        <div class="error" *ngIf="form.get(\'numero\').hasError(\'pattern\') && form.get(\'numero\').touched">\n          Somente númerico!\n        </div>\n      </ion-item>\n\n\n\n      <ion-item>\n        <ion-label floating>Complemento</ion-label>\n        <ion-input [(ngModel)]="novoEndereco.complemento" type="text" formControlName="complemento" [class.error1]="!form.controls.complemento.valid && form.controls.complemento.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( form.get(\'complemento\').hasError(\'minlength\') || form.get(\'complemento\').hasError(\'maxlength\') ||form.get(\'complemento\').hasError(\'pattern\') ||form.get(\'complemento\').hasError(\'required\') ) && form.get(\'complemento\').touched">\n        <div class="error" *ngIf="form.get(\'complemento\').hasError(\'maxlength\') && form.get(\'complemento\').touched">\n          Tamanho máximo para o complemento é 200 caracteres!\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Ponto de referẽncia</ion-label>\n        <ion-input [(ngModel)]="novoEndereco.pt_referencia" type="text" formControlName="pt_referencia" [class.error1]="!form.controls.pt_referencia.valid && form.controls.pt_referencia.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( form.get(\'pt_referencia\').hasError(\'minlength\') || form.get(\'pt_referencia\').hasError(\'maxlength\') ||form.get(\'pt_referencia\').hasError(\'pattern\') ||form.get(\'pt_referencia\').hasError(\'required\') ) && form.get(\'pt_referencia\').touched">\n        <div class="error" *ngIf="form.get(\'pt_referencia\').hasError(\'maxlength\') && form.get(\'pt_referencia\').touched">\n          Tamanho máximo para o ponto de referẽncia 2 é 200 caracteres!\n        </div>\n      </ion-item>\n\n      <button style="margin-top: 40px" ion-button type="submit" block>Salvar</button>\n    </form>\n  </ion-list> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-endereco/alterar-endereco.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AlterarEnderecoPage);
    return AlterarEnderecoPage;
}());

//# sourceMappingURL=alterar-endereco.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlterarSenhaPage = /** @class */ (function () {
    function AlterarSenhaPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    /**
     * close
     */
    AlterarSenhaPage.prototype.close = function () {
        this.view.dismiss();
    };
    AlterarSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alterar-senha',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-senha/alterar-senha.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Alterar Senha</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()" style="margin-right: 16px;">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-senha/alterar-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AlterarSenhaPage);
    return AlterarSenhaPage;
}());

//# sourceMappingURL=alterar-senha.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarNotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlterarNotificacoesPage = /** @class */ (function () {
    function AlterarNotificacoesPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    /**
     * close
     */
    AlterarNotificacoesPage.prototype.close = function () {
        this.view.dismiss();
    };
    AlterarNotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alterar-notificacoes',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-notificacoes/alterar-notificacoes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Alterar Notificações</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()" style="margin-right: 16px;">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <!-- <ion-item *ngIf="userData.participante.tipo == \'candidato\'">\n      <ion-label>Novas vagas</ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item>\n\n    <ion-item *ngIf="userData.participante.tipo == \'candidato\'">\n      <ion-label>Novas entrevistas</ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Novidades</ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item>\n\n    <ion-item *ngIf="userData.participante.tipo == \'candidato\'">\n      <ion-label>Promoções</ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item>\n\n    <ion-item *ngIf="userData.participante.tipo == \'candidato\'">\n      <ion-label>Vencimento de faturas</ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item> -->\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/alterar-notificacoes/alterar-notificacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AlterarNotificacoesPage);
    return AlterarNotificacoesPage;
}());

//# sourceMappingURL=alterar-notificacoes.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacidadePage = /** @class */ (function () {
    function PrivacidadePage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    PrivacidadePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacidadePage');
    };
    /**
     * close
     */
    PrivacidadePage.prototype.close = function () {
        this.view.dismiss();
    };
    PrivacidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacidade',template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/privacidade/privacidade.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Privacidade</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()" style="margin-right: 16px;">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/modals/privacidade/privacidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], PrivacidadePage);
    return PrivacidadePage;
}());

//# sourceMappingURL=privacidade.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the UtilsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UtilsServiceProvider = /** @class */ (function () {
    function UtilsServiceProvider() {
    }
    UtilsServiceProvider.prototype.getNomeMes = function (mes) {
        var meses = [
            'JAN',
            'FEV',
            'MAR',
            'ABR',
            'MAI',
            'JUN',
            'JUL',
            'AGO',
            'SET',
            'OUT',
            'NOV',
            'DEZ'
        ];
        return meses[mes - 1];
    };
    UtilsServiceProvider.prototype.toCPF = function (value) {
        value = String(value);
        if (!value) {
            return value;
        }
        var len = value.length;
        if (len <= 11) {
            value = Array(11 - (len - 1)).join("0") + value;
        }
        value = value.replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return value;
    };
    UtilsServiceProvider.prototype.validarCartao = function (cartao) {
        var defaultFormat = /(\d{1,4})/g;
        var cards = [
            {
                type: 'Aura',
                pattern: /^50[0-9]/,
                format: defaultFormat,
                maxLength: 16,
                length: [16],
                cvcLength: [3]
            },
            {
                type: 'Elo',
                pattern: /^(63636([89])|438935|504175|451416)/,
                format: defaultFormat,
                maxLength: 16,
                length: [16],
                cvcLength: [3]
            },
            {
                type: 'Hipercard',
                pattern: /^(38|60)/,
                format: defaultFormat,
                maxLength: 19,
                length: [13, 16, 19],
                cvcLength: [3]
            },
            {
                type: 'VisaElectron',
                pattern: /^4(026|17500|405|508|844|91[37])/,
                format: defaultFormat,
                maxLength: 16,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'Maestro',
                pattern: /^(5(018|0[23]|[68])|6(39|7))/,
                format: defaultFormat,
                maxLength: 19,
                length: [12, 13, 14, 15, 16, 17, 18, 19],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'forbrugsforeningen',
                pattern: /^600/,
                format: defaultFormat,
                maxLength: 16,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'Dankort',
                pattern: /^5019/,
                format: defaultFormat,
                maxLength: 16,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'Visa',
                pattern: /^4/,
                format: defaultFormat,
                maxLength: 16,
                length: [13, 16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'Master',
                pattern: /^(5[1-5]|2[2-7])/,
                format: defaultFormat,
                maxLength: 16,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'Amex',
                pattern: /^3[47]/,
                format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                maxLength: 15,
                length: [15],
                cvcLength: [4],
                luhn: true
            }, {
                type: 'Diners',
                pattern: /^3[0689]/,
                format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
                maxLength: 14,
                length: [14],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'Discover',
                pattern: /^6([045]|22)/,
                format: defaultFormat,
                maxLength: 16,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: 'unionpay',
                pattern: /^(62|88)/,
                format: defaultFormat,
                maxLength: 19,
                length: [16, 17, 18, 19],
                cvcLength: [3],
                luhn: false
            }, {
                type: 'JCB',
                pattern: /^35/,
                format: defaultFormat,
                maxLength: 16,
                length: [16],
                cvcLength: [3],
                luhn: true
            }
        ];
        var itemVerificado;
        cards.map(function (item) {
            if (item.pattern.test(cartao) && (item.length.indexOf(cartao.length) !== -1)) {
                if (item != undefined) {
                    itemVerificado = item;
                }
            }
        });
        if (itemVerificado == undefined) {
            return { type: 'invalido', cvcLength: [4], length: [16], maxLength: 16 };
        }
        return itemVerificado;
    };
    UtilsServiceProvider.prototype.toTel = function (value) {
        value = String(value);
        if (!value) {
            return value;
        }
        var value = value.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4,5})(\d{4})/, '$1-$2');
        return value;
    };
    UtilsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilsServiceProvider);
    return UtilsServiceProvider;
}());

//# sourceMappingURL=utils-service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_relato_relato__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_modals_relato_info_relato_info__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_relatos_relatos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_processos_processos__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notificacoes_notificacoes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notificacao_notificacao__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_modals_alterar_numero_alterar_numero__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modals_alterar_dados_pessoais_alterar_dados_pessoais__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modals_alterar_email_alterar_email__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modals_alterar_endereco_alterar_endereco__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modals_alterar_notificacoes_alterar_notificacoes__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modals_alterar_senha_alterar_senha__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_modals_privacidade_privacidade__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_registrar_registrar__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_locales_pt__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_select_searchable__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_brmasker_ionic_3__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_httpProvider_http_interceptor__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_utils_service_utils_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_httpProvider_http_provider__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_pipes_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_advogado_advogado__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_combo_combo__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































Object(__WEBPACK_IMPORTED_MODULE_31__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_23__angular_common_locales_pt__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_processos_processos__["a" /* ProcessosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_registrar_registrar__["a" /* RegistrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notificacao_notificacao__["a" /* NotificacaoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modals_alterar_dados_pessoais_alterar_dados_pessoais__["a" /* AlterarDadosPessoaisPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modals_alterar_email_alterar_email__["a" /* AlterarEmailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modals_alterar_endereco_alterar_endereco__["a" /* AlterarEnderecoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_modals_alterar_notificacoes_alterar_notificacoes__["a" /* AlterarNotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modals_alterar_numero_alterar_numero__["a" /* AlterarNumeroPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modals_alterar_senha_alterar_senha__["a" /* AlterarSenhaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_modals_privacidade_privacidade__["a" /* PrivacidadePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_relatos_relatos__["a" /* RelatosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_modals_relato_info_relato_info__["a" /* RelatoInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_25_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_24_ionic_select_searchable__["SelectSearchableModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_processos_processos__["a" /* ProcessosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_registrar_registrar__["a" /* RegistrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notificacao_notificacao__["a" /* NotificacaoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modals_alterar_dados_pessoais_alterar_dados_pessoais__["a" /* AlterarDadosPessoaisPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modals_alterar_email_alterar_email__["a" /* AlterarEmailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modals_alterar_endereco_alterar_endereco__["a" /* AlterarEnderecoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_modals_alterar_notificacoes_alterar_notificacoes__["a" /* AlterarNotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modals_alterar_numero_alterar_numero__["a" /* AlterarNumeroPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modals_alterar_senha_alterar_senha__["a" /* AlterarSenhaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_modals_privacidade_privacidade__["a" /* PrivacidadePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_relatos_relatos__["a" /* RelatosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_modals_relato_info_relato_info__["a" /* RelatoInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicErrorHandler"] },
                { provide: __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_30__providers_httpProvider_http_interceptor__["a" /* Interceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_33__providers_httpProvider_http_provider__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_advogado_advogado__["a" /* AdvogadoProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_combo_combo__["a" /* ComboProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_32__providers_utils_service_utils_service__["a" /* UtilsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_0__providers_relato_relato__["a" /* RelatoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpProvider_http_provider__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelatoProvider = /** @class */ (function () {
    function RelatoProvider(httpProvider, config) {
        this.httpProvider = httpProvider;
        this.config = config;
        this.server = this.config.URL_UTILIZADA;
    }
    RelatoProvider.prototype.aceitar = function (relatoID) {
        return this.httpProvider.get(this.server + 'relato/' + relatoID + '/aceitar');
    };
    RelatoProvider.prototype.recusar = function (relatoID) {
        return this.httpProvider.get(this.server + 'relato/' + relatoID + '/recusar');
    };
    RelatoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpProvider_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], RelatoProvider);
    return RelatoProvider;
}());

//# sourceMappingURL=relato.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            auth.check().subscribe(function () {
                if (auth.getUser() && auth.getUser().token) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */];
                }
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */];
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Network } from '@ionic-native/network';



var Interceptor = /** @class */ (function () {
    function Interceptor(
        // public net: Network,
        events, auth, alert, toastCtrl, loadingCtrl) {
        this.events = events;
        this.auth = auth;
        this.alert = alert;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    Interceptor.prototype.getQueryStrings = function (url) {
        var querys = url.split('?')[1];
        if (!querys)
            return {};
        var result = {};
        querys.split('&').forEach(function (item) {
            var i = item.split('=');
            result[i[0]] = i[1] == 'true' ? true : i[1] == 'false' ? false : i[1];
        });
        return result;
    };
    Interceptor.prototype.isConnected = function () {
        // let conntype = this.net.type;
        // return conntype && conntype !== 'unknown' && conntype !== 'none';
        return true;
    };
    Interceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var loading = this.loadingCtrl.create({
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
        var request;
        if ((req.url.indexOf('login') !== -1) || req.url.indexOf('registrar') !== -1) {
            request = req.clone({});
        }
        else {
            request = req.clone({ headers: req.headers.set('Authorization', this.auth.getUser() ? 'Bearer ' + this.auth.getUser().token : 'null') });
        }
        var queryParams = this.getQueryStrings(request.url);
        if (!queryParams['dontShowLoading']) {
            loading.present();
        }
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpResponse */]) {
                //TODO - MANIPULAR RESPOSTA
                loading.dismiss();
            }
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpErrorResponse */]) {
                //TODO - MANIPULAR STATUS DE ERRO
                if (error.status == 401) {
                    // this.events.publish('user:forceLogin');
                    if (req.url.indexOf('login') !== -1 || req.url.indexOf('info') !== -1) {
                        // Do nothing
                    }
                    else {
                        var _alert = _this.alert.create({
                            title: 'Tempo de acesso esgotado!',
                            message: 'O tempo de login expirou, você precisa relogar para continuar acessando!',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        _this.events.publish('user:forceLogout');
                                    }
                                }
                            ],
                            enableBackdropDismiss: false
                        });
                        _alert.present();
                    }
                }
                else if (error.status == 500) {
                    var _alert = _this.alert.create({
                        title: 'Erro no servidor',
                        message: 'Problema interno no servidor, tente novamente!',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    _alert.present();
                }
                else {
                    var _alert = _this.alert.create({
                        title: 'Falha!',
                        message: error.error.message || error.error.msg,
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    if (queryParams['dontShowErrorMessage'] === true) {
                        loading.dismiss();
                    }
                    else {
                        _alert.present();
                    }
                }
                loading.dismiss();
            }
        });
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"]])
    ], Interceptor);
    return Interceptor;
}());

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpProvider_http_provider__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = /** @class */ (function () {
    function AuthProvider(httpProvider, config) {
        this.httpProvider = httpProvider;
        this.config = config;
        this.server = this.config.URL_UTILIZADA;
    }
    AuthProvider.prototype.setUser = function (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthProvider.prototype.destroyUser = function () {
        localStorage.removeItem('user');
    };
    AuthProvider.prototype.destroySession = function () {
        localStorage.removeItem('session');
    };
    AuthProvider.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthProvider.prototype.login = function (credentials) {
        return this.httpProvider.post(this.server + 'auth/advogado/login?dontShowErrorMessage=true&dontShowLoading=true', __assign({}, credentials));
    };
    AuthProvider.prototype.registrar = function (dados) {
        return this.httpProvider.post(this.server + 'auth/advogado/registrar?dontShowErrorMessage=true&dontShowLoading=true', __assign({}, dados));
    };
    AuthProvider.prototype.check = function () {
        return this.httpProvider.get(this.server + 'auth/advogado/info');
    };
    AuthProvider.prototype.logout = function () {
        return this.httpProvider.put(this.server + 'auth/advogado/logout');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpProvider_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_phone__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__phone_phone__["a" /* PhonePipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__phone_phone__["a" /* PhonePipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utils_service_utils_service__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PhonePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PhonePipe = /** @class */ (function () {
    function PhonePipe(utils) {
        this.utils = utils;
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PhonePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.utils.toTel(value);
    };
    PhonePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'phone',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_utils_service_utils_service__["a" /* UtilsServiceProvider */]])
    ], PhonePipe);
    return PhonePipe;
}());

//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpProvider_http_provider__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComboProvider = /** @class */ (function () {
    function ComboProvider(httpProvider, config) {
        this.httpProvider = httpProvider;
        this.config = config;
        this.server = this.config.URL_UTILIZADA;
    }
    ComboProvider.prototype.cidades = function (params) {
        return this.httpProvider.get(this.server + 'combos/cidades', __assign({}, params));
    };
    ComboProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpProvider_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], ComboProvider);
    return ComboProvider;
}());

//# sourceMappingURL=combo.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
    }
    HttpProvider.prototype.get = function (url, params) {
        return this.http.get(url, { params: params });
    };
    HttpProvider.prototype.post = function (url, data) {
        return this.http.post(url, data);
    };
    HttpProvider.prototype.put = function (url, data) {
        return this.http.put(url, data);
    };
    HttpProvider.prototype.del = function (url, data) {
        return this.http.delete(url, data);
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.provider.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Config = /** @class */ (function () {
    function Config() {
        this.BASE_URL_PROD = 'http://192.168.1.7:8080/api/';
        this.proxy = "/api/";
        // public URL_UTILIZADA = this.BASE_URL_PROD;
        this.URL_UTILIZADA = this.proxy;
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__relatos_relatos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__processos_processos__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notificacoes_notificacoes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.totalNotificacoes = 0;
        this.totalProcessos = 0;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__relatos_relatos__["a" /* RelatosPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__processos_processos__["a" /* ProcessosPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__notificacoes_notificacoes__["a" /* NotificacoesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__["a" /* PerfilPage */];
        // this.interval = Observable.interval(60000);
        // this.interval.subscribe(() => {
        //   console.log("Atualize o total de notificações");
        //   console.log("Atualize o total de entrevistas");
        //   this.totalNotificacoes++;
        //   this.totalProcessos++;
        // });
    }
    TabsPage.prototype.ionViewWillLeave = function () {
        // this.interval.unsubscribe(); TODO
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/brisanet/personal/jushelp/app-advogado/src/pages/tabs/tabs.html"*/'<style>\n  .hide {\n    display: none;\n  }\n</style>\n\n<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Relatos" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Processos" tabIcon="briefcase" tabBadge="{{totalProcessos>0?totalProcessos:null}}" tabBadgeStyle="light"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Notificações" tabIcon="time" tabBadge="{{totalNotificacoes>0?totalNotificacoes:null}}" tabBadgeStyle="light"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/brisanet/personal/jushelp/app-advogado/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map