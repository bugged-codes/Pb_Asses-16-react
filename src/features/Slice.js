import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
	name: 'stuSlice',
	initialState: [{ Name: '', Age: 1, Course: '', Batch: '' }],
	reducers: {
		addData: (state, action) => {
			console.log('Add Data: ', action.payload);
		},

		editData: (state, action) => {
			console.log('Edit Data: ', action.payload);
			state[action.payload.index] = action.payload.newObj;
			return state;
		},
	},
});

export const { addData, editData } = dataSlice.actions;
export default dataSlice.reducer;
