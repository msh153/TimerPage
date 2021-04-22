import {TEST, ADD_TIME, DELETE_TIME} from "../constants";

export const runTest = () => ({
	type: TEST
});

export const addTime = time => ({
	type: ADD_TIME,
	payload: {
		time
	}
});

export const deleteTime = time_idx => ({
	type: DELETE_TIME,
	payload: {
		time_idx
	}
});