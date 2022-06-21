import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_detail_cocktail } from '../../actions'
import './Detail.css'

export default function Detail() {
    const detail = useSelector((state)=> state.detail)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_detail_cocktail(id))
    }, [id])
    console.log(detail);

    return (
        <div className='div'>
           {
               <img src={detail.strDrinkThumb} alt="" className='img2'/>
               
           }
           {
               <h3>{detail.strDrink}</h3>
               
           }
           {
                 <p>{detail.strInstructions}</p>
                 
           }
           {
               <p>{detail.strAlcoholic}</p>
           }

        </div>
    )
}
