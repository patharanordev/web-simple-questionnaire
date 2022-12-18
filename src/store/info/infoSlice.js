import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  infos: []                           
}

export const infoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    recordInfo: (state, action) => {
      let isExists = false

      // Check duplicate
      for(let i=0; i<state.infos.length; i++) {
        if (state.infos[i].uid === action.payload.uid) {
          isExists = true
          break
        }
      }
      
      state.infos = isExists ? [ ...state.infos ] : [ ...state.infos, action.payload ]
      state.infos = state.infos.sort((a, b) => (b.score-a.score))
    }
  }
})

export const { recordInfo } = infoSlice.actions

export default infoSlice.reducer