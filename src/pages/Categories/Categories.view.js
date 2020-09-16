import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../../components/Table/Table'
import { useSelector } from 'react-redux'
import { RiAddLine } from "react-icons/ri";
import './Categories.scss'
import Modal from '../../components/Modal/Modal.comp';

const categoriesActionsColumns = () => {
    return {
        key: 'render',
        title: 'Acciones',
        render: (r) => (
            <div className="crud__actions">
                <Link to={`/categories/edit/${r.id}`}>
                    Editar
                </Link>
                <Link to={`/categories/edit/${r.id}`}>
                    Eliminar
                </Link>
            </div>
        )
    }
}

const CategoriesDeleteModal = () => {
    return (
        <Modal />
    )
}

const Categories = () => {
    const categoriesList = useSelector(state => state.categoriesReducer.categoriesList)
    let categoriesListColumns = useSelector(state => state.categoriesReducer.categoriesListColumns)
    categoriesListColumns = [...categoriesListColumns, categoriesActionsColumns()]
    return (
        <div className="categories__wrapper">
            <main className="categories">
                <header className="categories__header">
                    <h1 className="categories__header_title"> Categorías </h1>
                    <Link to="/articles/add">
                        <div className="categories__header_icon">
                            <RiAddLine />
                        </div>
                    </Link>
                </header>
                <Table 
                    tableHeaders={categoriesListColumns} 
                    tableContent={categoriesList} 
                />
            </main>
            <CategoriesDeleteModal></CategoriesDeleteModal>
        </div>
    )
}

export default React.memo(Categories)