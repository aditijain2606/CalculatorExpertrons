
import { all } from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';



function* subtract(num1, num2) {
    try {
        yield put({
            type: 'SUBTRACT',
            val1: num1,
            val2: num2
        });
    }
    catch (error) {
        console.log(error);
    }
};

function* multiply(num1, num2) {
    try {
        yield put({
            type: 'MULTIPLY',
            val1: num1,
            val2: num2
        });
    }
    catch (error) {
        console.log(error);
    }
};

function* divide(num1, num2) {
    try {
        yield put({
            type: 'DIVIDE',
            val1: num1,
            val2: num2
        });
    }
    catch (error) {
        console.log(error);
    }
};
function* add(action) {
    console.log('Action add: ' + JSON.stringify(action))
    yield put({
            type: 'ADD',
            val1: 10,
            val2: 20
        });
}

function* rootSaga() {
    yield all[
        takeLatest('ADD', add),
        takeLatest('SUBTRACT', subtract),
        takeLatest('MULTIPLY', multiply),
        takeLatest('DIVIDE', divide)
    ] 
};

export default rootSaga;