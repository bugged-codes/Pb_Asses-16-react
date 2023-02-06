import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/Slice';

const Store = configureStore({
	reducer: {
		storeData: dataReducer,
	},
});

export default Store;
