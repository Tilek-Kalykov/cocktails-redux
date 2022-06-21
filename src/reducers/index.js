import {combineReducers} from 'redux'
import cocktails from './cocktails_reducer'
import detail from './detail_reducer'

const rootReducer = combineReducers({
    cocktails,
    detail
})

export default rootReducer