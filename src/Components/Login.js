import React from "react";
import {Field, reduxForm} from "redux-form";



const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {console.log(props)}
        <div>
            <Field placeholder = "Login" name = {'login'} component = {"input"}/>
        </div>
        <div>
            <Field placeholder = "Password" name = {'password'} component = {"input"}/>
        </div>
        <div>
            <Field type = "checkbox" name = {'rememberMe'} component = {"input"}/> remember me
        </div>
        <button>Submit</button>
    </form>
}


function Login(props){
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div className='container'>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm);



export default Login;