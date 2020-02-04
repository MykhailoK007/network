import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import * as axios from 'axios';
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
        componentDidMount() {
            let userId = this.props.match.params.userId;
            if(!userId){
                userId=2
            }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(responce => {
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

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));

