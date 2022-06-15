import {
    RESPONSE_DATA_REQUEST,
    RESPONSE_DATA_SUCCESS,
    RESPONSE_DATA_FAIL,
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_FAIL,
} from "./constants";

import axios from "axios";

const LIST_USERS_API = "https://reqres.in/api/users/";

export const getUsers = () => async(dispatch) => {
    dispatch({
        type: RESPONSE_DATA_REQUEST,
    });
    try {
        const response = await axios.get(LIST_USERS_API);
        dispatch({
            type: RESPONSE_DATA_SUCCESS,
            payload: {
                data: response.data,
            },
        });
    } catch (error) {
        dispatch({
            type: RESPONSE_DATA_FAIL,
            payload: error.message,
        });
    }
};

export const getUser = (userId) => async(dispatch) => {
    dispatch({
        type: USER_DATA_REQUEST,
    });
    try {
        const response = await axios.get(LIST_USERS_API + userId);
        console.log(response.data.data);
        const { avatar, email, first_name, last_name, id } = response.data.data;
        dispatch({
            type: USER_DATA_SUCCESS,
            payload: {
                id: id,
                avatar: avatar,
                email: email,
                first_name: first_name,
                last_name: last_name,
            },
        });
    } catch (error) {
        dispatch({
            type: USER_DATA_FAIL,
            payload: error.message,
        });
    }
};