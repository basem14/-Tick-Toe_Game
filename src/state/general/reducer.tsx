
import GeneralState from './state';

import {
    SET_LOADING
} from './types';

const generalReducer = (state = GeneralState, action: { type: String, payload: any }) => {
    const type = action.type;
    const payload = action.payload;

    switch (type) {

        case SET_LOADING: {
            return {
                ...state,
                loading: payload?.state
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default generalReducer;