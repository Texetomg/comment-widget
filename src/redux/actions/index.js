const initialState = [];

const fetchComments = entityId => (dispatch, getState) => {
  const payload = getState().comments || initialState;

  dispatch({
    type: "FETCH_COMMENTS",
    payload: payload
  });
};

const addComment = payload => dispatch => {
  dispatch({
    type: "ADD_COMMENT",
    payload
  });
};

const delComment = payload => dispatch => {
  dispatch({
    type: "DEL_COMMENT",
    payload
  });
};

const editComment = payload => dispatch => {
  dispatch({
    type: "EDIT_COMMENT",
    payload
  });
};

export { fetchComments, addComment, delComment, editComment };
