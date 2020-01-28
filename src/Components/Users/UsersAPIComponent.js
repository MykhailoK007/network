import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersAPIComponent extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>{
               this.props.setUsers(response.data.items);
               this.props.setTotalUserCount(response.data.totalCount);

        })
    }
     changeCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${page}&count=${this.props.pageSize}`)
            .then(response =>{
                this.props.setUsers(response.data.items);

            })
    }
    render() {
        return <Users users = {this.props.users}
                      changeCurrentPage = {this.changeCurrentPage}
                      totalUserCount = {this.props.totalUserCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}

                      deleteUserAC = {this.props.deleteUserAC}
                      addUserAC = {this.props.addUserAC}
        />
    }
}

export default UsersAPIComponent;