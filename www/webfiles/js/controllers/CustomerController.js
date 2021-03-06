class CustomerController {

    static authenticate(user){
        return new Promise(resolve => {
            ConnectionServer.sendRequest('lawyer/login','POST', user , resolve);
        });
    }

    static getDataCep(cep){
        return new Promise(resolve => {
            ConnectionServer.simpleRequest('http://apps.widenet.com.br/busca-cep/api/cep/'+cep+'.json','','',resolve)
        })
    }

    static getUf(){
        return new Promise(resolve => {
            ConnectionServer.sendRequest('estates','GET','',resolve);
        })
    }

    static getCities(state_id){
        return new Promise(resolve => {
            ConnectionServer.sendRequest('cities?state_id='+state_id,'GET','',resolve)
        })
    }

    static insert(data)
    {
        return new Promise(resolve => {
            ConnectionServer.sendRequest('lawyer','POST', data, resolve);
        })
    }

}
