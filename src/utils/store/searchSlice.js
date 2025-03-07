import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {}, // time complexity to iterate on object is way better than array
    reducers: {
        cacheResult: (state, action) => {
            state = Object.assign(state, action.payload) // merging 2 obj aka {...state, ...action.payload}
        }
    }
})

export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;