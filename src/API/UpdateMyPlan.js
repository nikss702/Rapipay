import _agent from "../auth/superagentWrapper";
const BACKEND_SERVER = "https://admin-backend.rapipe.tech/"


export default function UpdateMyPlan(payload = {}){
    return new Promise((resolve, reject)=>{
        const sessionKey = localStorage.getItem("refreshToken");
        _agent
            .post(`${BACKEND_SERVER}/terminal/updateTerminalDetails`)
            .send({...payload, ...{sessionKey}})
            .then((response)=>{
                resolve(response.body);
            });
    });
}