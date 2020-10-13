import { cloneDeep } from 'lodash';

export default function movies(state, action) {
    if (state === undefined) {
        return { data: {} };
    }
    switch (action.type) {
        case 'reset':
            return { data: {} };
        case 'add':
            const data = cloneDeep(action.data);
            return { data };            
        case 'error':
            return { err: action.err };
        default:
            return state;
    }
}