import Axios from "axios"
// import { getUserInfo } from "../../../controllers/groupController"

export default {
    login: function(email, password) {
        return Axios.post("/api/users/login", {email, password})
    },
    signUp: function(name, email, password) {
        return Axios.post("/api/users/signUp", {name, email, password})
    },
    getMembers: function(){
        return Axios.get("/api/Grupo/users")
    },
    getUserInformation: function(){
        return Axios.get("/api/users")
    },
    joinGrupo: function(inviteCode){
        return Axios.put("/api/Grupo/join?=invite"+ inviteCode)
    },
    createPerformance: function(performance, UserId, date){
        return Axios.post("/api/performances", {performance ,UserId, date})
    },
    removePerformance: function(performanceId){
        return Axios.delete("/api/performance?id=" + performanceId)
    },
    getGrupoInfo: function(){
        return Axios.get("/api/Grupo")
    },
    getGrupoPerformances: function(){
        return Axios.get("/api/performances")
    },
    logout: function(){
        return Axios.get("/api/users/logout")
    }
}