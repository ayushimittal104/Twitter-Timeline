export const tweets = (state ={},action) =>{
    switch(action.type) {
        case 'RECEIVE_TWEETS':
            return {
                ...state,...action.tweets
            }
        case 'TOGGLE_LIKE':
            return{
                ...state,
                ...state.tweets,
                [action.id]:{
                    ...state[action.id],
                    likes: action.hasLiked === true
                      ? state[action.id].likes.filter((uid) => uid !== action.AuthUser)
                      : state[action.id].likes.concat([action.AuthUser])
                    }
                
                    
            }
         case 'ADD_TWEET' :
            const { tweet } = action
            let replyingTo = {}
            if (tweet.replyingTo !== null) {
                replyingTo = {
                [tweet.replyingTo]: {
                    ...state[tweet.replyingTo],
                    replies: state[tweet.replyingTo].replies.concat([tweet.id])
                }
                }
            }

            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo,
            }
        default:
            return state
    }
}