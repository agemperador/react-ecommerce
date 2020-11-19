import { takeLatest, put } from 'redux-saga/effects';

import apis from './shop.function'

import ShopActionTypes from './shop.types'

import { fetchCollectionsSucces, fetchCollectionsFailure } from './shop.actions'

export function* fetchCollectionsAsync() {
    yield console.log('I am fired');
    try {
        const snapshot = yield apis.getData()
        yield put(fetchCollectionsSucces(snapshot.data.collection))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}