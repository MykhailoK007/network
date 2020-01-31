import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import * as axios from 'axios';
class ProfileContainer extends React.Component{
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
                .then(responce => {
                    console.log(responce.data)
                    this.props.setUserProfile(responce.data)
                })
        }

    render() {
        return <div>
            <Profile profile={this.props.state.profile}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        state: state.profile
    }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)

