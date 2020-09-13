import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import './ArticleAdd.scss'

const ArticleAdd = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (
        <div className="article_add__wrapper">
            <h1>Soy el article Add</h1>
            <form className="article_add__form">
                <input 
                    onChange={ (e) => setTitle(e.target.value)}
                    type="text" 
                    value={title} 
                />
                <textarea
                    onChange={ (e) => setContent(e.target.value)}
                >
                    { content }
                </textarea>
                <button
                    onSubmit={ () => console.log('vamos a agregar')}
                >
                    Agregar Artículo
                </button>
            </form>
        </div>
    )
}

const addArticle = (title, content) => {
    axios.get('')
}

export default ArticleAdd