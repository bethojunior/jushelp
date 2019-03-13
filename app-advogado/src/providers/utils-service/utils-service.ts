import { Injectable } from '@angular/core';

/*
  Generated class for the UtilsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsServiceProvider {

  constructor() { }

  getNomeMes(mes) {

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

    return meses[mes-1];
  }

  toCPF(value) {

    value = String(value);

    if(!value){
      return value;
    }

    var len = value.length;

    if(len <= 11){
      value = Array(11 - (len-1)).join("0") + value;
    }

    value = value.replace( /\D/g , "")
      .replace( /(\d{3})(\d)/ , "$1.$2")
      .replace( /(\d{3})(\d)/ , "$1.$2")
      .replace( /(\d{3})(\d{1,2})$/ , "$1-$2");

    return value;
  }

  validarCartao(cartao){
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

      cards.map(function(item){
        if(item.pattern.test(cartao) && (item.length.indexOf(cartao.length) !== -1)){
          if(item != undefined){
            itemVerificado = item;
          }
        }
      });

      if(itemVerificado == undefined){
        return {type: 'invalido', cvcLength: [4], length: [16], maxLength: 16};
      }

      return itemVerificado;
  }

  toTel(value) {
    value = String(value);

    if(!value){
      return value;
    }

    var value = value.replace(/\D/g, '')
                     .replace(/(\d{2})(\d)/ , '($1) $2')
                     .replace(/(\d{4,5})(\d{4})/, '$1-$2');

    return value;
  }

}
