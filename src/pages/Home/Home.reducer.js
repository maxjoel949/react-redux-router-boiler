const initialState = {
    hola: 'adios'
}

export const HomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CAMBIAR_SALUDO':
            return {
                ...state,
                hola: action.saludo
            }
        default: {
            return state
        }
    }
}