import React from "react";
import {connect} from "react-redux";
import {addUser, deleteUser, setCurrentPage, setTotalUserCount, setUsers,toggleFetching} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            })
    }

    changeCurrentPage = (page) => {
        this.props.toggleFetching(true);
        this.props.setCurrentPage(page);

        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
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
            />

    }
}

function mapStateToProps(state){
    return{
            users:state.users.users,
            currentPage:state.users.currentPage,
            pageSize:state.users.pageSize,
            totalUserCount:state.users.totalUserCount,
            isFetching:state.users.isFetching
    }
};


export default connect(mapStateToProps,{
    addUser, deleteUser, setUsers, setCurrentPage, setTotalUserCount,toggleFetching})(UsersContainer);