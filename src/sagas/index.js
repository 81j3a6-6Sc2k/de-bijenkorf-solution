import dataSaga from './data.js';

export default function* sagas() {
    yield [
        dataSaga()
    ];
};