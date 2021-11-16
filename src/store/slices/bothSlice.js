import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  both: { name: null, xyz: null, cost: null },
  add: [],
}
export const bothSlice = createSlice({
  name: 'both',
  initialState,
  reducers: {
    setBoth: (state, action) => {
      state.both.name = action.payload.name
      state.both.xyz = action.payload.xyz
      state.both.cost = action.payload.cost
    },
    setAdd: (state, action) => {
      state.add.push(action.payload)
    },
    clearAdd: (state) => {
      state.add = []
    },
  },
})
export const { setBoth, setAdd, clearAdd } = bothSlice.actions
export default bothSlice.reducer
