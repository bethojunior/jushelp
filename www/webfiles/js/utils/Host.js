const environment = getEnvironment(false);


const IMAGE_DEFAULT       = environment.hosts.hostImageDefault;
const PATH_IMAGE          = environment.hosts.hostImage;
const PATH_IMAGE_PROFILE  = environment.hosts.profileImage;
const PATH_PROFILE        = environment.hosts.profileImage;
const HOST                = environment.hosts.local;
const ID_FACEBOOK         = environment.hosts.idFacebook;
const HOST_SITE           = environment.hosts.hostSite;

/**
 *
 * @param production {boolean}
 * @returns {*}
 */
function getEnvironment(production){
    const environments = [
        {
            name  : "test",
            hosts : {
                local: "",
                hostRequest: "",
                hostSite: "",
                idFacebook : "",
                hostImage : "",
                hostImageDefault: "",
                profileImage : "",
            },
            socket : {
                test    : true,
                keyTrip : "55d92b9e36d1bd828212",
                keyChat : "d972017e7893eac71c31"
            }
        },{
            name  : "production",
            hosts : {
                local: "",
                hostPwa : "",
                hostRequest: "",
                hostSite: "",
                idFacebook : "",
                hostImage : "",
                hostImageDefault: "",
                profileImage : "",
            },
            socket : {
                test    : false,
                keyTrip : "d18413a6f1df893db951",
                keyChat : "dda2d265e1ce9b51048f"
            }
        }
    ];

    return environments.filter(environment=>{
        return "production".includes(environment.name) === production;
    })[0];
}