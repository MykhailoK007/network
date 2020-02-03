import React from 'react';
import classes from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


function Users(props){

    function addUser(id){
        props.addUser(id)
    }
    function deleteUser(id){
        props.deleteUser(id)
    }


    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    let number = 1;
    for(let i = number; i <= pagesCount; i++){
        pages.push(i);
    }
    return  <div className = 'container'>

        <div className={classes.pages}>{

            pages.map((element,index) => {
                return <span key={index} className={ props.currentPage == element && classes.activePage}
                             onClick={() => {props.changeCurrentPage(element)}} >{element} </span>
            })
        }
        </div>
            {props.isFetching ?
                <img src="https://media.giphy.com/media/EhTIih4rcMoSI/giphy.gif"
                     alt=""style = {{width:300,height:200}}/>:null}

                     {props.users.map(element => <div key={element.id}>


                    <div className={classes.user}>
                        <NavLink to={'profile/' + element.id} className='a'>
                            {element.photos.small ? <img className={classes.avatar}
                                                         src={element.photos.small} alt=""/> :
                                <img className={classes.avatar}
                                     src="https://img.icons8.com/cotton/64/000000/person-male--v2.png" alt=""/>}
                        </NavLink>

                        <div>
                            <h2>{element.name}</h2>
                            {(element.followed) ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${element.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "59c0a21e-416e-47e0-82fc-f6999d52d118"
                                        }
                                    })
                                        .then(responce => {
                                            if (responce.data.resultCode == 0) {
                                                deleteUser(element.id)
                                            }

                                        })
                                }}
                                                          className={classes.button}>Unfollow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${element.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "59c0a21e-416e-47e0-82fc-f6999d52d118"
                                        }
                                    })
                                        .then(responce => {
                                            console.log(responce)
                                            if (responce.data.resultCode == 0) {
                                                addUser(element.id)
                                            }

                                        })
                                }}
                                        className={classes.button}>Follow</button>}
                        </div>
                    </div>

            </div>
            )
        }
        </div>



}


export default Users;
