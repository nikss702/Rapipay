import _agent from "../auth/superagentWrapper";
const BACKEND_SERVER = "https://admin-backend.rapipe.tech/"

export default function FetchMyPlan(payload = {}){
    return new Promise((resolve, reject)=>{
        const sessionKey = localStorage.getItem("refreshToken");
        _agent
            .get(`${BACKEND_SERVER}/terminal/getTerminalDetails?tid=10020208`)
            .query({...payload, ...{sessionKey}})
            .end((err, response)=>{
                if(!response || (response && response.statusCode === "400")){
                    reject({})
                }else
                    resolve(response.body);
            });
    });
}