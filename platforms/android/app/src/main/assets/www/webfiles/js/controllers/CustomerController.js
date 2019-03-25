class CustomerController {
    static authenticate(user){
        return new Promise(resolve => {
            ConnectionServer.sendRequest('','', user , resolve)
        })
    }

    static forgotPassword(user){
        return new Promise(resolve => {
            ConnectionServer.sendRequest('','', );
        })
    }

    static getDataCep(cep){
        return new Promise(resolve => {
            ConnectionServer.simpleRequeste('http://apps.widenet.com.br/busca-cep/api/cep/'+cep+'.json','','',resolve)
        })
    }
}