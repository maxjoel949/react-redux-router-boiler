
export const cambiarSaludo = ( saludo ) => {
    return {
        type: 'CAMBIAR_SALUDO',
        saludo
    }
} 
export const changeMenu = (idMenuList) => {
    return {
        type: 'CHANGE_MENU',
        idMenuList
    }
}
