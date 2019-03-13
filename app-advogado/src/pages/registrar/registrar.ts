import { TabsPage } from '../tabs/tabs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html'
})
export class RegistrarPage {
  formDadosPessoais: FormGroup;
  formContato: FormGroup;
  formEndereco: FormGroup;
  formSenha: FormGroup;
  stepNum = 1;

  validation_messages = {
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
  }

  pageTitle = 'Dados Pessoais';

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private auth: AuthProvider
    ) {
      // Vamos criar o form dos dados pessoais
      this.formDadosPessoais = this.formBuilder.group({
        nome: new FormControl('', Validators.required),
        cpf: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}')
        ])),
        rg: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+')
        ])),
        oab: new FormControl('', Validators.required),
        data_nasc: new FormControl('', Validators.required),
      });

      // Vamos criar o form dos contatos
      this.formContato = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        celular: new FormControl('', Validators.compose([
          Validators.required
        ]))
      });

      // Vamos criar o form do endereco
      this.formEndereco = this.formBuilder.group({
        cep: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{5}\-[0-9]{3}')
        ])),
        numero: new FormControl('', Validators.required),
        logradouro: new FormControl('', Validators.compose([
          Validators.required
        ])),
        bairro: new FormControl('', Validators.compose([
          Validators.required
        ])),
        complemento: new FormControl('', Validators.compose([
          Validators.required
        ])),
        pt_referencia: new FormControl('')
      });

      // Vamos criar o form da senha
      this.formSenha = this.formBuilder.group({
        senha: new FormControl('', Validators.compose([
          Validators.required
        ]))
      });
    }

  nextStep() {
    if(this.stepNum==4) return;
    this.stepNum++;
    if(this.stepNum==2) {
      this.pageTitle = "Contatos";
    }
    
    if(this.stepNum==3) {
      this.pageTitle = "Endereço";
    }
    
    if(this.stepNum==4) {
      this.pageTitle = "Crie uma senha";
    }
  }

  salvar() {
    if (this.formDadosPessoais.valid&&this.formContato.valid&&this.formEndereco.valid&&this.formSenha.valid) {
      let dadosCadastro = {
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

      let loading = this.loadingCtrl.create({
        content: 'Registrando, por favor aguarde...'
      });

      loading.present();

      // Realizando login com os dados digitados
      this.auth.registrar(dadosCadastro)
        .subscribe(
          dados => {
            // Realizando login com os dados digitados
            this.auth.login({email: dadosCadastro.email, senha: dadosCadastro.senha})
              .subscribe(
                loginDados => {
                  this.auth.setUser(loginDados);
                  loading.dismiss();
                  this.navCtrl.setRoot(TabsPage);
                },
                error => {
                  loading.dismiss();
                  const toast = this.toastCtrl.create({
                    message: (error && error.error && error.error.msg) || "Resposta não localizada",
                    duration: 4000
                  });
                  toast.present();
                }
              );
          },
          error => {
            loading.dismiss();
            const toast = this.toastCtrl.create({
              message: (error && error.error && error.error.msg) || "Resposta não localizada",
              duration: 4000
            });
            toast.present();
          }
        );
    }
  }
}
