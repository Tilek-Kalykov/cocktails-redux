import { DETAIL_COCKTAIL } from "../actions/types";

const initialState = {}

const detail_reducer = (cocktail = initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case DETAIL_COCKTAIL:
            return payload
        default:
            return cocktail
    }
}

export default detail_reducer