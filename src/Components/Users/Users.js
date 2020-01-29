import React from 'react';
import classes from './Users.module.css'


function Users(props){

    function addUser(id){
        props.addUser(id)
    }
    function deleteUser(id){
        props.deleteUser(id)
    }


    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for(let i = 1;i <= pagesCount; i++){
        pages.push(i);
    }
    return  <div className = 'container'>

        <div className={classes.pages}>{
            pages.map(element => {
                return <span className={ props.currentPage == element && classes.activePage}
                                     onClick={() => {props.changeCurrentPage(element)}}>{element}</span>
            })
        }</div>
            {props.isFetching ? <img src="https://media.giphy.com/media/EhTIih4rcMoSI/giphy.gif" alt=""style={{width:300,height:200}}/>:null}
            {
                props.users.map(element => <div key={element.id}>


                       <div className={classes.user}>{element.photos.small ? <img className={classes.avatar}
                               src={element.photos.small} alt=""/> :
                           <img className={classes.avatar}
                                src="https://img.icons8.com/cotton/64/000000/person-male--v2.png" alt="" />}
                           <div>
                           <h2>{element.name}</h2>
                           {(element.followed) ? <button onClick={ () => { deleteUser(element.id) }}
                               className={classes.button}>Unfollow</button> :
                               <button onClick={ () => {addUser(element.id) } }
                                       className={classes.button}>Follow</button>}
                           </div>
                       </div>
                   </div>


                )
            }
        </div>



}


export default Users;
