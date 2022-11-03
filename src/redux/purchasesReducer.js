import { ADD_NOTE, ADD_NOTE_TITLE, SET_ACTIVE, SET_TEXT } from "./types"

const initialState = {
    notes: [],
    activenote: {}
}

const notesReducer = (state = initialState, type) => {
    switch (type.type) {
        case SET_TEXT: {
            let result = state.notes.findIndex(res => res.id === type.data.id)
            let note = {
                id: type.data.id,
                data: type.data.data,
                text: type.text
            }
            let newNotes = [
                ...state.notes.slice(0, result),
                note,
                ...state.notes.slice(result + 1)
            ]
            return {
                ...state,
                notes: newNotes
            }
        }
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, { id: type.id, data: 'Title', text: '' }],

            }
        case ADD_NOTE_TITLE: {
            let result = state.notes.findIndex(res => res.id === type.data.id)
            let NewNotes = [
                ...state.notes.slice(0, result),
                type.data,
                ...state.notes.slice(result + 1)
            ]
            return {
                ...state,
                notes: NewNotes,
                activenote: type.data
            }
        }
        case SET_ACTIVE: {
            let active = state.notes.filter(act => act.id === type.id)
            return {
                ...state,
                activenote: active[0]
            }
        }
        default:
            return state
    }
}

export default notesReducer