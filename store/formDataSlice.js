// formDataSlice.js

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  phoneNumber: '',
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return {...state, ...action.payload};
    },
  },
});

export const {updateFormData} = formDataSlice.actions;
export default formDataSlice.reducer;
