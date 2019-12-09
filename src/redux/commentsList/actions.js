import {
    DEL_COMMENT,
    EDIT_COMMENT,
} from './actionsTypes'

export const delComment = (payload) => ({
    type: DEL_COMMENT,
    payload,
});

export const editComment = (payload) => ({
    type: EDIT_COMMENT,
    payload,
});