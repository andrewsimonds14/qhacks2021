import types from './types';

const actions = {
	updateUserInfo: (user) => ({
		type: types.UPDATE_BUDDY_INFO,
		payload: { user },
	}),
};

export default actions;
