import { FETCH_SMURFS_SUCCESS, SMURFS_FAIL, SMURFS_LOADING } from "../actions";

export const initialState = {
	smurfs: [],
	isLoading: false,
	error: ""
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SMURFS_LOADING:
			return {
				...state,
				isLoading: true,
				error: "",
			}
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isLoading: false,
				error: "",
			}
		case SMURFS_FAIL:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state;
	}
};
