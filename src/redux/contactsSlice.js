import { createSlice } from "@reduxjs/toolkit"
import initialPhoneList from '../phoneList.json'

const slice = createSlice({
    name: "contact",
    initialState: {
        items: [...initialPhoneList],
        originalItems: [...initialPhoneList]
    }, 
    reducers: {
        deleteContact: (state, action) => {
            const contactId = action.payload
            state.items = state.items.filter(contact => contact.id !== contactId)
         },
        addContact: (state, action) => { 
            state.items.push(action.payload)
        },
        returnContacts: (state) => {
            state.items = state.originalItems
        }
    },
    
})

export const {deleteContact,returnContacts, addContact} = slice.actions

export default slice.reducer