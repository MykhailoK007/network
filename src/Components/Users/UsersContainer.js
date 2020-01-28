import React from "react";
import {connect} from "react-redux";
import {addUserAC, deleteUserAC, setCurrentPageAC, setTotalUserCountAC, setUserAC} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";


function mapStateToProps(state){
    return{
            users:state.users.users,
            currentPage:state.users.currentPage,
            pageSize:state.users.pageSize,
            totalUserCount:state.users.totalUserCount
    }
};
function mapDispatchToProps(dispatch){
    return{
        addUserAC:(id) => {
            dispatch(addUserAC(id))
        },
        deleteUserAC: (id) => {
            dispatch(deleteUserAC(id))
        },
        setUsers:(users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUserCount:(count) => {
            dispatch(setTotalUserCountAC(count))
        }



    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)


export default UsersContainer;