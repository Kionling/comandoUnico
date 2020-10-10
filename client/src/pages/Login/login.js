import React from "react"
import { Link } from "react-router-dom"
import LoginForm from "../../components/LoginForm/loginForm"
import Footer from "../../components/Footer/footer"
function Login(){
    return(
        <div>
            <LoginForm />
            <Footer/>
        </div>
    )
}
export default Login