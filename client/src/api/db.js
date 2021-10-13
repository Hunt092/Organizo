import axios from 'axios'
const baseurl = process.env.REACT_APP_BaseURL

export const GetallTodo = async (userid) => {
    const res = await axios.get(`${baseurl}/todo/getall/${userid}`)
    const { todoArray } = res.data
    return todoArray
}
export const getTodo = async (todoid) => {
    const res = await axios.get(`${baseurl}/todo/${todoid}`)
    return res.data
}
export const createTodo = async (todoData, userid) => {
    const res = await axios.post(`${baseurl}/todo/create/${userid}`, todoData)
    return res.data
}
export const updateToDo = async (todoData, todoid) => {
    const res = await axios.patch(`${baseurl}/todo/update/${todoid}`, todoData)
    return res.data
}
export const deleteTodo = async (todoid) => {
    const res = await axios.delete(`${baseurl}/todo/delete/${todoid}`)
    return res.data
}
export const GetallJournal = async (userid) => {
    const res = await axios.get(`${baseurl}/journal/getall/${userid}`)
    const { journalPages } = res.data
    return journalPages
}
export const getJournal = async (journalid) => {
    const res = await axios.get(`${baseurl}/journal/${journalid}`)
    return res.data
}

export const createJournal = async (journaldata, userid) => {
    const res = await axios.post(`${baseurl}/journal/create/${userid}`, journaldata)
    return res
}
export const updateJournal = async (journaldata, journalid) => {
    const res = await axios.patch(`${baseurl}/journal/update/${journalid}`, journaldata)
    return res
}

export const deleteJournal = async (journalid) => {
    const res = await axios.delete(`${baseurl}/journal/${journalid}`)
    return res.data
}

export const signup = async (email, password) => {
    const res = await axios.post(`${baseurl}/user/signup`, { email, password })
    return res.data
}
export const login = async (email, password) => {
    const res = await axios.post(`${baseurl}/user/login`, { email, password })
    return res.data
}
