import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "filter",
    initialState: {
        items: ""
    },
    reducers: {
        filterContact: (state, action) => {
            state.items = action.payload
        }
    }
})
export const { filterContact } = slice.actions
export default slice.reducer