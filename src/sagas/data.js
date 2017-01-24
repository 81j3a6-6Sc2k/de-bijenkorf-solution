import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* itemChangeStatusRequest({ payload }) {
    console.info('Requested item status change.');
    
    // NOTE Async API queries

    console.info('Request parsed.');

    yield put({
        type: 'ITEM_SET_STATUS',
        payload: {
            id: payload.id
        }
    });
};

export default function* dataSaga() {
    yield takeEvery('ITEM_CHANGE_STATUS', itemChangeStatusRequest);
};