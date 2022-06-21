import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../Detail/Detail'
import Home from '../Home/Home'

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
        </Routes>
    )
}
