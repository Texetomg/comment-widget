import { combineReducers, createStore } from 'redux';
import commentFormReducer from '../commentForm/reducer';
import commentsListReducer from '../commentsList/reducer';

const initialState = {
	person: {
		date: Date.now(),
		name: 'Bogdan',
	},
	comment: '',
	commentsList: {[

	]}
}
const rootReducer = combineReducers({
	comment: commentFormReducer,
	commentsList: commentsListReducer,
});

export default createStore(rootReducer);
