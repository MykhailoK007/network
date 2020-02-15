import * as axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"59c0a21e-416e-47e0-82fc-f6999d52d118"
    }
});

export const usersAPI = {
    getUsers(curentPage , pageSize = 40){

       return  instance.get(`users?page=${curentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            });
    },
    getById(userId){
        return instance.get(`profile/${userId}`)
            .then(responce => responce.data)
    }

}
export const authorizationApi = {
    getInfo(){
        return instance.get('auth/me')
            .then(responce => responce.data)
    }
}