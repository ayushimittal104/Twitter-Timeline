import thunk from 'redux-thunk';
import logger from './logger';
import {applyMiddleware} from 'redux';

// export const middleware = () =>{
//     return applyMiddleware(thunk,logger,)
// }
// // import thunk from 'redux-thunk'
// // import logger from './logger'
// // import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  logger,
)