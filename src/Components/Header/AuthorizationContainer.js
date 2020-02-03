import React from "react";
import * as axios from "axios";
import {setUserData} from "../../redux/authorization-reducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'
class AuthorizationContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then(responce => {
                if(responce.data.resultCode == 0) {
                    let {id, login, email} = responce.data.data
                    this.props.setUserData(id, login,email)
                }

            })
    }

    render() {

        return(
            <div>

                <div className={classes.login}>{ this.props.isAuth ? <span>Account name: {this.props.login}</span> : <NavLink to='/login' className='a'>Login</NavLink>}</div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        isAuth: state.authorization.isAuth,
        login:state.authorization.login
    }
}


export default connect(mapStateToProps,{setUserData})(AuthorizationContainer);