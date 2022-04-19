import _agent from "../auth/superagentWrapper";
const BACKEND_SERVER = "https://admin-backend.rapipe.tech/"


export default function getNotifications(payload={}){
    return new Promise((resolve, reject)=>{
        const sessionKey = localStorage.getItem("refreshToken");
        _agent
            .get(`${BACKEND_SERVER}/notifications/getNotifications?userId=8130852096`)
            .query({...payload, ...{sessionKey}})
            .end((err, response)=>{
                console.log(response);
                if(!response || (response && response.statusCode === "400")){

                    reject({})

                }else

                    resolve(response.body);

             });
    });
}