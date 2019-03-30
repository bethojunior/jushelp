class RegisterService {

  static registerLawyer ( data ) {
    return new Promise( resolve => {
      ConnectionServer.post( ConnectionServer.Host() + '/advogado', data, resolve );
    } );
  }

}