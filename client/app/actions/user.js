import * as types from "./user-types";

export const SetUserId = (id) => {
    return {
        type: types.SET_USER_ID,
        data: id
    }
};