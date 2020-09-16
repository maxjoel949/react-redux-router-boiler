import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import axios from 'axios'
import './ArticleAdd.scss'

const ArticleAdd = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    return (
        <div className="article_add__wrapper">
            <h1>Soy el article Add</h1>
            <form onSubmit={ (e) => addArticle(e, title, content, setLoading)} className="article_add__form">
                <input 
                    onChange={ (e) => setTitle(e.target.value)}
                    type="text" 
                    value={title} 
                />
                <textarea
                    onChange={ (e) => setContent(e.target.value)}
                    defaultValue={ content }
                />

                <button
                    type="submit"
                >
                    Agregar Artículo
                </button>
            </form>
            <p>
                { loading ? 'Estamos Cargando putos' : 'status: ok'}
            </p>
        </div>
    )
}

const addArticle = async (e, title, content, setLoading) => {
    e.preventDefault()
    setLoading(true)
    const response = await axios.post('http://localhost:8000/api/articles/add', {
        title,
        content
    })
    console.log('response', response)
    setLoading(false)
}

export default ArticleAdd