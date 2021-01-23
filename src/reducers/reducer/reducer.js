import types from './types';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case types.UPDATE_BUDDY_INFO: {
			const { user } = payload;
			return {
				...state,
				buddies: {
                    ...state.buddies,
                    
                }
			};
		}
		// Default
		default: {
			return state;
		}
	}
};
