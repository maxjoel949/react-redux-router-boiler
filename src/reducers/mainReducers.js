const initialState = {
    menuList: [
        {
            id: 0,
            name: 'Inicio',
            link: '/',
            is_selected: true
        }, 
        {
            id: 1,
            name: 'Enlaces',
            link: '/enlaces',
            is_selected: false
        },
        {
            id: 2,
            name: 'Proyectos (sitios)',
            link: '/proyectos',
            is_selected: false
        }
    ]
}

export default function mainReducers(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_MENU': {
            const menuPivot = state.menuList
            menuPivot.forEach(el => el.is_selected = false)
            menuPivot.filter(el => el.id === action.id)[0].is_selected = true
            return {
                ...state,
                menuList: menuPivot
            }
        }
        default: {
            return state
        }
    }
}