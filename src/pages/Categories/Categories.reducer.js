import axios from 'axios'


const initialState = {
    categoriesListColumns: [{
            key: 'id',
            title: 'Id'
        },
        {
            key: 'name',
            title: 'Título'
        },
        {
            key: 'slug',
            title: 'Slug'
        }
    ],
    categoriesList: []
}

export default function ArticlesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_CATEGORIES': {
            return {
                ...state,
                categoriesList: action.categories,
            }
        }
        case 'CREATE_CATEGORY': {
            return state
        }
        default: {
            return state
        }
    }
}
