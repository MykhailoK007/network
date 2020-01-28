import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersAPIComponent extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>{
               this.props.setUsers(response.data.items);
               console.log(response.data.items)
        })
    }
    render() {
        return <Users users = {this.props.users}
                      currentPage = {this.props.setCurrentPage}
                      totalUserCount = {this.props.totalUserCount}
                      pageSize = {this.props.pageSize}
        />
    }
}


export default UsersAPIComponent;