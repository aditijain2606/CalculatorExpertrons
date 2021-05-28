import { combineReducers } from 'redux';

const initialState = {
    result: 0,
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                result: parseFloat(action.val1) + parseFloat(action.val2),
            };
        }
        case 'SUBTRACT': {
            return {
                ...state,
                result: parseFloat(action.val1) - parseFloat(action.val2),
            };
        }
        case 'MULTIPLY': {
            return {
                ...state,
                result: parseFloat(action.val1) * parseFloat(action.val2),
            };
        }
        case 'DIVIDE': {
            return {
                ...state,
                result: parseFloat(action.val1) / parseFloat(action.val2),
            };
        }
        default: {
            return state;
        }
    }
};

const rootReducer = combineReducers({
    result: resultReducer,
  });
export default rootReducer;
