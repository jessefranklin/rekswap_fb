import {HYDRATE} from 'next-redux-wrapper'

const initState = {
    test: []    
}

export default function reducer (state = initState, action) {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            }
        case 'init':
            return action.payload;
        default:
            return state
    }
};