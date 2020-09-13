import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Table from '../../../components/Table/Table'

const ArticleList = () => {
    const listArticlesColumns = useSelector(state => state.articlesReducer.listArticlesColumns)
    const listArticles =        useSelector(state => state.articlesReducer.listArticles)
    
    return (
        <div className="article_list__wrapper">
            <main className="article_list">
                <h1> Soy el article List </h1>
                <Link to="/articles/add">NUEVO</Link>
                <Table tableHeaders={listArticlesColumns} tableContent={listArticles} />
            </main>
        </div>
    )
}

export default ArticleList