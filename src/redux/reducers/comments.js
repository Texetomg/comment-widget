import data from "../../mocks/comments.json";

const initialState = [...data];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return action.payload;
    case "ADD_COMMENT":
      return [...state, action.payload];
    case "DEL_COMMENT":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case "EDIT_COMMENT":
      return state.map(comment => {
        return comment.id === action.payload.id ? action.payload : comment;
      });
    default:
      return state;
  }
};

export default comments;
