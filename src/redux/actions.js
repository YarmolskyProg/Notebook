import { ADD_NOTE, ADD_NOTE_TITLE, SET_ACTIVE, SET_TEXT } from "./types";

export const addNote = (id) => ({
    type: ADD_NOTE,
    id
})

export const addNoteTitle = (data, id) => ({
    type: ADD_NOTE_TITLE,
    data: { data, id }
})
export const setActive = (id) => ({
    type: SET_ACTIVE,
    id
})
export const setText = (data, text) => ({
    type: SET_TEXT,
    text: text,
    data: data
})