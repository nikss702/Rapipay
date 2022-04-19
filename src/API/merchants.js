import _agent from "../auth/superagentWrapper";
const BACKEND_SERVER = "https://admin-backend.rapipe.tech/"

export default function searchMerchant(payload){
    return new Promise((resolve, reject)=>{
        const sessionKey = localStorage.getItem("refreshToken");
        _agent
            .post(`${BACKEND_SERVER}/user-details/searchMerchant/`)
            .send({...payload, ...{sessionKey}})
            .end((err, response)=>{
                if(!response || (response && response.statusCode === "400")){
                    reject({})
                }else
                    resolve(response.body);
            });
    });
}
