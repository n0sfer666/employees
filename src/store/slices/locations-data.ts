import { createSlice } from '@reduxjs/toolkit'
import { defaultLocations } from '../../utils/employee-handlers'
import { ILocationsSliceState, TSetLocationPayload } from '../store.types'

const initialState: ILocationsSliceState = { ...defaultLocations }

const locationsDataSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state: ILocationsSliceState, action: TSetLocationPayload) => {
      const { type, value } = action.payload
      state = { ...state, [type]: value }
    }
  }
})

export default locationsDataSlice.reducer
export const { setLocation } = locationsDataSlice.actions
