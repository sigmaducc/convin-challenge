import {
    RESPONSE_DATA_REQUEST,
    RESPONSE_DATA_SUCCESS,
    RESPONSE_DATA_FAIL,
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_FAIL,
} from "./constants";

export const ListUsersAPIReducer = (
    state = { loading: true, allUsersData: {} },
    action
) => {
    switch (action.type) {
        case RESPONSE_DATA_REQUEST:
            return { loading: true };
        case RESPONSE_DATA_SUCCESS:
            return {
                loading: false,
                allUsersData: action.payload,
            };
        case RESPONSE_DATA_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const SingleUserAPIReducer = (
    state = {
        cardLoading: false,
        cardData: {
            id: 0,
            email: "coolguy@gmail.com",
            first_name: "Cool",
            last_name: "Guy",
            avatar: "https://www.pngfind.com/pngs/m/518-5183747_cool-guy-smaller-than-128x128-pixels-hd-png.png",
        },
    },
    action
) => {
    switch (action.type) {
        case USER_DATA_REQUEST:
            return { cardLoading: true };
        case USER_DATA_SUCCESS:
            return { cardLoading: false, cardData: action.payload };
        case USER_DATA_FAIL:
            return { cardLoading: false, error: action.payload };
        default:
            return state;
    }
};