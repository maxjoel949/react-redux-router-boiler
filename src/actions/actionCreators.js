import axios from 'axios'

export const changeMenu = (idMenuList) => {
    return {
        type: 'CHANGE_MENU',
        idMenuList
    }
}

export const getCategories = () => {
     return async dispatch => {
         const response = await axios.get('http://localhost:8000/api/categories')
         const resData = await response.data

         dispatch({
             type: 'GET_CATEGORIES',
             categories: resData.payload
         })
     }
}