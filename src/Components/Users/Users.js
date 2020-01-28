import React from 'react';
import classes from './Users.module.css'


function Users(props){

    function addUser(id){
        props.addUserAC(id)
    }
    function deleteUser(id){
        props.deleteUserAC(id)
    }
    function changeCurrentPage (page){
        props.currentPage(page)
    }

    let pagesCount = props.totalUserCount / props.pageSize;

    let pages = [];

    for(let i = 1;i <= pagesCount; i++){
        pages.push(i);
    }
    return  <div className = 'container'>
                <div className={classes.pages}>{
                    pages.map(element => {
                        return <span className={props.currentPage === element && classes.activePage } onClick={changeCurrentPage(element)}>{element}</span>
                    })
                }</div>
            {
                props.users.map(element => <div key={element.id}>


                       <div >{element.photos.small ? <img className={classes.avatar}
                               src={element.photos.small} alt=""/> :
                           <img className={classes.avatar}
                               src="https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg" alt=""/>}
                           <span>{element.name}</span>
                           {(element.followed) ? <button onClick={ () => { deleteUser(element.id) }}>Unfollow</button> :
                               <button onClick={ () => {addUser(element.id) } }>Follow</button>}
                       </div>
                   </div>


                )
            }
        </div>



}


export default Users;