/**
 * Created by pegdwende on 7/13/2018.
 */

import {USER_LOGGED_IN} from '../types';
import api from '../api';

export const userLoggedIn = (user)=>({
    types:USER_LOGGED_IN,
    user
});
export const login = credentials=>dispatch=>(
    console.log(credentials),
api.user.login(credentials).then(
    // user=>dispatch(userLoggedIn(user))

));