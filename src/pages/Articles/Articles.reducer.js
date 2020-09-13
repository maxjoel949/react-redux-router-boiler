
const initialState = {
    listArticlesColumns: [
        {
            key: 'id',
            title: 'Id'
        },
        {
            key: 'title',
            title: 'Título'
        },
        {
            key: 'permalink',
            title: 'Enlace Permanente'
        }
    ],
    listArticles: [
        {
            id: 1,
            title: 'El mejor cracker prro',
            permalink: 'el-mejor-cracker-prro-qlo'
        }
    ]
}

export default function ArticlesReducer(state = initialState, action) {
    switch(action.type) {
        case 'CREATE_ARTICLE': {
            return state
        }
        default: {
            return state
        }
    }
}