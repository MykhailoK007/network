import React from "react";
import {connect} from "react-redux";
import {
    addUser,
    deleteUser,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleFetching,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component{
    componentDidMount() {

        this.props.toggleFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data =>
            {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
                console.log(data)
            })
    }

    changeCurrentPage = (page) => {

        this.props.toggleFetching(true);
        this.props.setCurrentPage(page);
        console.log(page);
        console.log(this.props.currentPage);


        usersAPI.getUsers(page,this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                console.log(data)
            })
    }


    render() {
        return <Users users = {this.props.users}
                      changeCurrentPage = {this.changeCurrentPage}
                      totalUserCount = {this.props.totalUserCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      isFetching = {this.props.isFetching}
                      deleteUser = {this.props.deleteUser}
                      addUser = {this.props.addUser}
                      toggleFollowingProgress = {this.props.toggleFollowingProgress}
                      followingInProgress = {this.props.followingInProgress}
            />

    }
}

function mapStateToProps(state){
    return{
            users:state.users.users,
            currentPage:state.users.currentPage,
            pageSize:state.users.pageSize,
            totalUserCount:state.users.totalUserCount,
            isFetching:state.users.isFetching,
            followingInProgress: state.users.followingInProgress
    }
};


export default connect(mapStateToProps,{
    addUser, deleteUser, setUsers, setCurrentPage, setTotalUserCount,toggleFetching,toggleFollowingProgress})(UsersContainer);