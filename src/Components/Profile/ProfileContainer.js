import React from "react";
import {connect} from "react-redux";
import {getById} from "../../redux/profile-reducer";
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
           this.props.getById(userId)
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
export default compose(connect(mapStateToProps,{getById}),
    withRouter,
    withAuthRedirect
    )(ProfileContainer)


