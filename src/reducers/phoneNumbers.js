import {
    UPDATE_FILTERS,
    LOAD_LIST
} from "../actions/phoneNumbers";

const defaultState = {
    filters: {
        status: null,
        country: null
    },
    countryName: null,
    state: null,
    countryCode: null,
    phoneNumber: null,
};
let result = null;
export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
            result = {...state};
            if (action.key === 'country') {
                result.filters.country = action.value;
            } else if (action.key === 'status') {
                result.filters.status = action.value;
            }
            return result;
        case LOAD_LIST:
            return {...state, isLoading: true};
        default:
            return state;
    }
};