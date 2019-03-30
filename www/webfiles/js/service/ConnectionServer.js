class ConnectionServer {
    static Host () {
        return environment.hosts.hostRequest;
    }

    /**
     * @param url
     * @param method
     * @param params
     * @param callback
     */
    static sendRequestApi ( url, method = "GET", params = null, callback = function ( response ) {
    } ) {

        const request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if ( request.readyState === 4 ) {
                switch ( request.status ) {
                    case 401: {
                        ConnectionServer.sessionExpired();
                        break;
                    }
                    case 200: {
                        if ( callback )
                            callback( JSON.parse( this.responseText ) );
                        break;
                    }
                    default: {
                        console.error( this.responseText );
                    }
                }
            }
        };
        request.open( method, environment.hosts.hostRequestApi + url );
        request.setRequestHeader( 'token', Session.getValueInSession( 'user', 'api_token' ) );
        request.setRequestHeader( 'userid', Session.getValueInSession( 'user', 'idUser' ) );
        request.send( ConnectionServer.prepareRequest( params, false ) );
    }

    /**
     *
     * @param url
     * @param method
     * @param formData
     * @returns {Promise<any>}
     */

    static sendRequestWithFiles ( url, method = "GET", formData ) {
        return new Promise( resolve => {
            const request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if ( request.readyState === 4 && request.status === 200 ) {
                    resolve( JSON.parse( this.responseText ) );
                }
            };
            request.open( method, ConnectionServer.Host() + url, true );
            request.setRequestHeader( 'token', Session.getValueInSession( 'user', 'api_token' ) );
            request.setRequestHeader( 'userid', Session.getValueInSession( 'user', 'idUser' ) );
            request.send( formData );
        } );
    }

    /**
     *
     * @param url
     * @param method
     * @param params
     * @param callback
     * @param reject
     */
    static sendRequest ( url, method = "GET", params = null, callback = ( response ) => {
    }, reject = () => {
    } ) {

        const request = new XMLHttpRequest();

        request.timeout = 10000;

        request.onreadystatechange = function () {
            if ( request.readyState === 4 ) {
                switch ( request.status ) {
                    case 401: {
                        ConnectionServer.sessionExpired();
                        break;
                    }
                    case 200: {
                        if ( callback )
                            callback( JSON.parse( this.responseText ) );
                        break;
                    }
                    default: {
                        reject( "problemas com internet" );
                    }
                }
            }
        };
        request.open( method, ConnectionServer.Host() + url );

        request.setRequestHeader( 'Content-Type', 'application/json; charset=utf-8' );
        request.setRequestHeader( 'token', Session.getValueInSession( 'user', 'api_token' ) );
        request.setRequestHeader( 'userid', Session.getValueInSession( 'user', 'idUser' ) );
        request.send( ConnectionServer.prepareRequest( params, false ) );

    }

    static prepareRequest ( params, isStdObject ) {
        if ( !isStdObject )
            return JSON.stringify( params );

        if ( !Array.isArray( params ) ) {
            params = [ params ];
        }
        return JSON.stringify( { stdObject: params } );
    }

    static sessionExpired () {
        SwalCustom.messageDialog( "Sessão expirada", "Ops", "info" ).then( () => {
            Session.delete( "user" );
            location.href = "/";
        } );
    }


    static sendRequestCustomer ( url, method = "GET", params = null, callback = ( response ) => {
    }, reject = () => {
    } ) {

        const request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if ( request.readyState === 4 ) {
                switch ( request.status ) {
                    case 401: {
                        ConnectionServer.sessionExpired();
                        break;
                    }
                    case 200: {
                        if ( callback )
                            callback( JSON.parse( this.responseText ) );
                        break;
                    }
                    default: {
                        reject( "problemas com internet" );
                    }
                }
            }
        };
        request.open( method, url );

        request.setRequestHeader( 'Content-Type', 'application/json; charset=utf-8' );
        request.setRequestHeader( 'token', Session.getValueInSession( 'user', 'api_token' ) );
        request.setRequestHeader( 'userid', Session.getValueInSession( 'user', 'idUser' ) );
        request.send( ConnectionServer.prepareRequest( params, false ) );

    }

    static simpleRequeste ( url, method = "GET", data = null, resolve ) {
        $.ajax( {
            url: url,
            method: method,
            params: data,
            success: function ( response ) {
                resolve( response )
            },
            error: function ( response ) {
                resolve( response )
            }
        } )
    }

    static post ( url, data = null, resolve ) {
        $.ajax( {
            url: url,
            method: 'POST',
            data: data,
            success: function ( response ) {
                resolve( response )
            },
            error: function ( response ) {
                resolve( response )
            }
        } );
    }

}