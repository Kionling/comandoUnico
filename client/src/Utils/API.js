import Axios from "axios"

export default {
    login: function() {
        return Axios.post("/api/users/login")
    },
    signUp: function() {
        return Axios.post("/api/users/signUp")
    },
    getMembers: function(){
        return Axios.get("/api/Grupo/users")
    }
}