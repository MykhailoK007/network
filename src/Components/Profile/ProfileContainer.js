import React from "react";
import {connect} from "react-redux";
import {getById, getStatus, setUserStatus, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
        componentDidMount() {
            let userId = this.props.match.params.userId;
            if(!userId){
                userId=2
            }

           this.props.getById(userId);
            this.props.getStatus(userId);
        }

    render() {
        return <div>
            <Profile profile={this.props.state.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        state: state.profile,
        status: state.profile.status
    }
}
export default compose(connect(mapStateToProps,{getById,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
    )(ProfileContainer)


