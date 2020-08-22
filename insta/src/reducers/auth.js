const initialState = {
	user_name: '',
	email: ''
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
        //test reducer, change it according to the actual data
		case 'SIGNUP':
			return {
					...state,
					api_token: action.payload.api_token,
					user: action.payload.user,
			};
		default:
			return state;   
	}
}