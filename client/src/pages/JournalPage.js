import React, { useEffect, useState } from 'react'
import '../styles/Journal.css';
import Journal from '../components/Journal'
import { useStateValue } from '../Store/StateProvider';
import JournalForm from '../components/JournalForm';
import { createJournal, DeleteJournal, updateJournal } from '../api/db';

const JournalPage = () => {
    const [{ user, journals }, dispatch] = useStateValue()
    const [journalarray, setjournalarray] = useState([])
    const [isAdd, setisAdd] = useState(false)
    const [isEdit, setisEdit] = useState(false)
    const [formtitle, setformtitle] = useState('')
    const [formcontent, setformcontent] = useState('')
    const [journalId, setjournalId] = useState(null)

    const resetAll = (e) => {
        e.preventDefault()
        setisEdit(false)
        setisAdd(false)
        setformtitle('')
        setformcontent('')
        setjournalId(null)
    }
    const addJournal = (journaldata) => {
        if (formtitle && formcontent) {

            (async () => {
                const res = await createJournal(journaldata, user)
                const newjournaldata = { _id: res.journalId, ...journaldata }
                const newJournalarray = [...journalarray, newjournaldata]
                dispatch({
                    type: 'UPDATE__JOURNALS',
                    journals: newJournalarray
                })
                alert(res.message)
                setisAdd(false)
            })()
        }
    }

    const deleteJournal = (id) => {
        (async () => {
            const res = await DeleteJournal(id)
            const newJournalArray = journalarray.filter(journal => journal._id !== id)
            alert(res)
            dispatch({
                type: 'UPDATE__JOURNALS',
                journals: newJournalArray
            })
        })()
    }
    const UpdateJournal = (newJournal) => {
        (
            async () => {
                const res = await updateJournal(newJournal, journalId)
                const UpdatedArray = journals.map(journal => (
                    journal._id === journalId ?
                        { ...journal, ...newJournal }
                        : journal
                ))
                alert(res)
                dispatch({
                    type: "UPDATE__JOURNALS",
                    journals: UpdatedArray
                })
            }
        )()
        setisEdit(false)
    }
    useEffect(() => {
        setjournalarray(journals)
    }, [journals])

    return (
        <main className="journalpage">
            <div className="journalpage__header">
                <h1>My Journal</h1> <span title="Add" onClick={isEdit ? (e) => resetAll(e) : e => setisAdd(!isAdd)}>{isAdd || isEdit ? "Back" : "Add"}</span>
            </div>

            {isAdd || isEdit ? <JournalForm title={formtitle} setTitle={setformtitle} data={formcontent} setData={setformcontent} create={isEdit ? UpdateJournal : addJournal} id={journalId} /> :
                <div className="journalpage__content" >
                    {journalarray.map(({ title, date, data, _id }) => (
                        <Journal key={_id} id={_id} data={data} title={title} date={date} deleteFunc={deleteJournal} setUpdate={setisEdit} setTitle={setformtitle} setData={setformcontent} setjournalId={setjournalId} />
                    ))}
                </div>}

        </main>
    )
}

export default JournalPage
