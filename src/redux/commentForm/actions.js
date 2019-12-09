import {
    SEND_COMMENT
} from './actionsTypes'

export const sendComment = (payload) => ({
    type: SEND_COMMENT,
    payload,
});