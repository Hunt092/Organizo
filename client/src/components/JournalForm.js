import React from 'react'

const JournalForm = ({ title, setTitle, data, setData, create }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let journal = {
            title,
            data
        }
        create(journal)
        setTitle('')
        setData('')
    }
    return (
        <div className='journalForm'>
            <header className='journalForm__header'> <h2>Create</h2>  </header>
            <div className="journalForm__title">
                <input type="text" placeholder="Your Title" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="journalForm__content">
                <textarea placeholder="Your message..." name="journalData" id="" cols="20" rows="10" value={data} onChange={e => setData(e.target.value)}></textarea>
            </div>
            <div className="formbutton">
                <button onClick={(e) => handleSubmit(e)}>Add Journals</button>
            </div>
        </div>
    )
}

export default JournalForm
