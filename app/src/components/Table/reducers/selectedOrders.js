import {SELECT_ALL_ORDERS, SELECT_ORDER} from '../../../reducers/types';;

const initialState = []

export const selectedOrders = (state = initialState, { type, payload }) => {
    switch (type) {
        case SELECT_ORDER:

            const index = state.indexOf(payload);

            let newState = [...state];
            if (index > -1) {
                newState.splice(index, 1)
            } else {
                newState = [
                    ...state,
                    payload
                ];
            }

            return newState;
        case SELECT_ALL_ORDERS:
            state = payload
            return state;

        default:
            return state
    }
}