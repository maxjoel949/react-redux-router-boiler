import React from 'react'

const Table = ({ tableHeaders, tableContent }) => {

    return (
        <div className="table__wrapper">
            <table>
                <thead>
                    <tr>
                        {
                            tableHeaders.map( (e, i) => {
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
                        tableContent.map( (e, i) => {
                            return (
                                <tr key={ `row-${i}`}>
                                    {
                                        tableHeaders.map( (f, j) => (
                                            <td key={ `${f.key}-${e.key}-${i}` }>
                                                { e[f.key] }
                                            </td>
                                        ))
                                    }
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table