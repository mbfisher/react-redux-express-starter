import { GREETING } from './actions';
const debug = require('debug')('reducer');

const initialState = {
    greeting: 'Welcome!'
};

function reducer(state = initialState, action) {
    debug('Received action', action);

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