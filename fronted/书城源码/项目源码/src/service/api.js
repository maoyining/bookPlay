const request = require("./request").request
const config = require("./config.json")

//登陆
let Login = async (id,password)=>{
    let response = await request(`post`, `${config.Login}`, {
        username:id,
        password:password
    })
    return JSON.parse(JSON.stringify(response))
}


export default {
    Login:Login,
    
}