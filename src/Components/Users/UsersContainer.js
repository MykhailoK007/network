import React from "react";
import {connect} from "react-redux";
import {addUser, deleteUser, setCurrentPage, setTotalUserCount, setUsers,toggleFetching} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>{
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);

            })
    }
    changeCurrentPage = (page) => {
        this.props.toggleFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${page}&count=${this.props.pageSize}`)
            .then(response =>{
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);

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