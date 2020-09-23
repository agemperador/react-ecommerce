import ShopActionTypes from './shop.types'

import apis from './shop.function'

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSucces = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCES,
    payload: collectionsMap
})


export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart());

        apis.getData().then(async collectionMap => {
            dispatch(fetchCollectionsSucces(collectionMap.data.collection))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}