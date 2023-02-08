import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
	name: 'stuSlice',
	initialState: [{ newObj: { Name: 'Boy1', Age: 20, Course: 'MERN', Batch: 'October' } }],
	reducers: {
		addData: (state, action) => {
			state.push(action.payload);
			console.log('Add Data: ', action.payload);
			return state;
		},

		editData: (state, action) => {
			state[action.payload.stuIndex.newObj] = action.payload.newObj;
			console.log('Edit Data: ', action.payload);
			return state;
		},
	},
});

export const { addData, editData } = dataSlice.actions;
export default dataSlice.reducer;

// encapsulated initial values in newObj
// now edit page is not working. tried changing editData, as well as <EditStu/> now initial data is array of objects -> [->newObj->{stuData}]
