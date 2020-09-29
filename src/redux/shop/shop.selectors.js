import { createSelector } from 'reselect'

const selectShop = state => {
    return state.shop
};

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collectionsObject =>
    collectionsObject ? Object.keys(collectionsObject).map(key => collectionsObject[key]) : []

)

export const selectShopCollection = collectionUrlParam => (
    createSelector(
        [selectShopCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)