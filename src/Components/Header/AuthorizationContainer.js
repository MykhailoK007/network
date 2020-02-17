import React from "react";
import {getAuthorizationInfo} from "../../redux/authorization-reducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'

class AuthorizationContainer extends React.Component{

    componentDidMount() {

        this.props.getAuthorizationInfo()
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


export default connect(mapStateToProps,{getAuthorizationInfo})(AuthorizationContainer);