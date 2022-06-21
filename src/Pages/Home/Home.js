import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { find_cocktails_by_name, get_all_cocktails } from '../../actions'
import './Home.css'

export default function Home() {
    const cocktails = useSelector((state)=>state.cocktails)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_cocktails())
    }, [])
    const search=(name)=>{
        if(name.length > 2){
            dispatch(find_cocktails_by_name(name))
        }else{
            dispatch(get_all_cocktails())
        }
    }
    console.log(cocktails);

    return (
        <div>
            <input 
                type="text"
                onKeyUp={(e)=>{
                    search(e.target.value)
                }}
              className='input'
              placeholder='Search Cocktail'/>
        
            <div className='output'>
                {
                    cocktails.length != 0 &&
                    cocktails.map(el=>(
                        <Link to={`detail/${el.idDrink}`} key={el.idDrink}>
                            <img src={el.strDrinkThumb} alt="" className='img'/>
                            <p>{el.strDrink}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
