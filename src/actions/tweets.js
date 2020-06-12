import {saveLikeToggle,saveTweet} from '../utils/api';
import {showLoading,hideLoading} from 'react-redux-loading';

export const receiveTweets = (tweets) =>{
    return {
        type: 'RECEIVE_TWEETS',
        tweets
    }
}

const saveToggle = ({id,AuthUser,hasLiked}) =>{
    console.log({id,AuthUser,hasLiked})
    return {type: 'TOGGLE_LIKE',
    id,
    AuthUser,
    hasLiked
}
}

export const handleSaveToggle = (info) =>{
    return (dispatch) => {
        dispatch(saveToggle(info))
        return saveLikeToggle(info)
        .catch((e) =>{
            console.warn("Error in handleToggleTweet",e);
            dispatch(saveToggle(info))
            alert("There was error in liking Tweet.Try again.")

        })
    }
}


function addTweet (tweet) {
    return {
      type: 'ADD_TWEET',
      tweet,
    }
  }

export function handleAddTweet (text, replyingTo) {
    return (dispatch, getState) => {
      const { AuthUser } = getState()
  
      dispatch(showLoading())
  console.log( text,AuthUser,replyingTo)
      return saveTweet({
        text,
        author: AuthUser,
        replyingTo
      })
        .then((tweet) => dispatch(addTweet(tweet)))
        .then(() => dispatch(hideLoading()))
    }
  }