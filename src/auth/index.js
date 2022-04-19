import _agent from 'superagent';
import Cookies from 'js-cookie'

const BACKEND_SERVER = "https://admin-backend.rapipe.tech"

export function userSignin(payload){
    return new Promise((resolve, reject)=>{
        _agent
            .post(`${BACKEND_SERVER}/admin-portal/auth/login`)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .send({...payload, ...{"serviceType": "AUTH_LOGIN"}})
            .end((err, resp)=>{
                if(err && err.statusCode === 400){
                    reject(resp)
                }

                if(resp && resp.statusCode === 200){
                    const response = resp.body;
                    const token = response.key;
                    Cookies.set('token', token,  { expires: 7 });
                    resolve(response);
                }
            });
    });
}

export function userRegister(payload){
    return new Promise((resolve, reject)=>{
        _agent
            .post(`${BACKEND_SERVER}/custom/registration/`)
            .set('Accept', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .send(payload)
            .end((err, resp)=>{
                if(err && err.statusCode === 400){
                    return(reject(resp))
                }

                if(resp && resp.statusCode === 200){
                    resolve(resp);
                }
            });
    });
}