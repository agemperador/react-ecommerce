import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CollectionsPreview from '../collection-preview/collection-preview.component'

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

import './collections-overview.styles.scss';

const CollectionsOverview = ({match,collections}) =>{
    console.log('match collection',match);
    return(
    <div className='collections-overview'>
            {collections.map(({id,...collectionProps}) => (
                <CollectionsPreview key= {id} {...collectionProps} />
            ))}
    </div>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})



export default connect(mapStateToProps)(CollectionsOverview);