import { GREETING } from './actions';
const debug = require('debug')('reducer');

const initialState = {
    greeting: 'Welcome!'
};

function reducer(state, action) {
    debug('Received action', action);

    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case GREETING:
            return {...state,
                greeting: action.text
            };
        default:
            return state;
    }
}

export default reducer;