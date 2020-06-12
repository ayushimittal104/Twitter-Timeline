import {combineReducers} from 'redux';
import {AuthUser} from './AuthUser';
import {tweets} from './tweets';
import {users} from './users';
import {loadingBarReducer} from 'react-redux-loading';

export default combineReducers({
    AuthUser,
    tweets,
    users,
    loadingBar:loadingBarReducer
})
