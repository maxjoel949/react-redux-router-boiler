import React, { useEffect } from 'react'
import {
    useDispatch
} from 'react-redux'
import Categories from './Categories.view'
import { getCategories } from '../../actions/actionCreators'

const CategoriesContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories());
    })
    return (
        <Categories />
    )
}

export default CategoriesContainer