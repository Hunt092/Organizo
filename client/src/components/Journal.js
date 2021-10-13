import React from 'react'

const Journal = ({ data, title, date, id, deleteFunc, setUpdate, setTitle, setData, setjournalId }) => {
    let parsedDate = new Date(date)
    let datestring = parsedDate.toLocaleDateString()

    const handleDelete = (e) => {
        e.preventDefault()
        deleteFunc(id)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setTitle(title)
        setData(data)
        setjournalId(id)
        setUpdate(true)
    }

    return (
        <div className="journal">
            <div className="journal__header">
                <div className="journal__headerContent">
                    <h3 className="journal__title">{title}</h3>
                    <h5 className="journal__date">{datestring}</h5>
                </div>
                <div className="journal__control">
                    <div className="journal__delete" onClick={e => handleDelete(e)} >Delete</div>
                    <div className="journal__edit" onClick={e => handleEdit(e)} >Edit</div>
                </div>
            </div>
            <div className="journal__content">
                <p>{data}</p>
            </div>
        </div>
    )
}

export default Journal
