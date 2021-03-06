import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
       return {
           isAuth: state.authorization.isAuth
       }

}

export let  withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{

        render() {
            {debugger}
            if(!this.props.isAuth)return <Redirect to='/login'/>

            return <Component {...this.props}/>
        }
    }
    let connectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connectAuthRedirectComponent;
}
