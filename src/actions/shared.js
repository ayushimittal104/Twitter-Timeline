import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';
import {receiveTweets} from './tweets';
import {AuthUser} from './authUser';
import {showLoading,hideLoading} from 'react-redux-loading';

const AuthUserID = 'tylermcginnis'
export const handleInitialData = () =>{
    return (dispatch) =>{
    dispatch(showLoading());
    return getInitialData().then(({tweets,users}) => {
        console.log(tweets);
        console.log(users)
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(AuthUser(AuthUserID))
        dispatch(hideLoading())
    })
}
}