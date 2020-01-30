import data from "../../mocks/comments.json";

const initialState = [...data];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return action.payload;
    case "ADD_COMMENT":
      return [...state, action.payload];
    case "DEL_COMMENT":
      return state.map(comment => (
        comment.id === action.payload.id ? action.payload : comment
      ));
    case "EDIT_COMMENT":
      return state.map(comment => (
        comment.id === action.payload.id ? action.payload : comment
      ));
    default:
      return state;
  }
};

export default comments;
