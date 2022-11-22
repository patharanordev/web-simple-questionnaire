import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  infos: []                           
}

export const infoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    recordInfo: (state, action) => {
      state.infos = [ ...state.infos, action.payload ]
      state.infos = state.infos.sort((a, b) => (b.score-a.score))
    }
  }
})

export const { recordInfo } = infoSlice.actions

export default infoSlice.reducer