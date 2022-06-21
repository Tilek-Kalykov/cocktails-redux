import { COCKTAILS_LIST, FIND_LIST } from "../actions/types";

const initialState = []

const cocktails_reducer = (cocktails = initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case COCKTAILS_LIST:
            return payload
        case FIND_LIST:
            return payload
        default:
            return cocktails
    }
}

export default cocktails_reducer