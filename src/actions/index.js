import axios from 'axios'
import { API_GET_DETAIL, API_LIST, API_SEARCH } from '../config'
import { COCKTAILS_LIST, DETAIL_COCKTAIL, FIND_LIST } from './types'

export const get_all_cocktails = () => async (dispatch)=>{
    const res = await axios(API_LIST)

    dispatch({
        type: COCKTAILS_LIST,
        payload: res.data?.drinks
    })
}

export const find_cocktails_by_name = (name) => async (dispatch)=>{
    const res = await axios(API_SEARCH+name)
    
    dispatch({
        type: FIND_LIST,
        payload: res.data?.drinks
    })
}

 
export const get_detail_cocktail = (id) => async (dispatch)=>{
    const res = await axios(API_GET_DETAIL+id)

    dispatch({
        type: DETAIL_COCKTAIL,
        payload: res.data?.drinks[0]
    })
}

 

