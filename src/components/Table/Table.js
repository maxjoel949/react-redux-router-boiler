import React from 'react'
import './Table.scss'

const Table = ({ tableHeaders, tableContent }) => {
    return (
        <div className="table__wrapper">
            <table>
                <thead>
                    <tr>
                        {
                            tableHeaders && tableHeaders.map((e, i) => {
                                return (
                                    <td key={ `head-${e.key}-${i}` }>
                                        { e.title }
                                    </td>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableContent && tableContent.map((e, i) => (
                            <tr key={`row-${i}`}>
                                {
                                    tableHeaders.map( (f, j) => (
                                        f.render ? (
                                            <td key={ `${f.key}-${e.key}-${i}` }>
                                                {f.render(e)}
                                            </td> 
                                        ) : (
                                            <td key={ `${f.key}-${e.key}-${i}` }>
                                                { e[f.key] }
                                            </td>
                                        )
                                    ))
                                    
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table