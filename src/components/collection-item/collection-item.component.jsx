import React from 'react'

import './collection-item.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
            <div className='collection-footer'>
                <span className='name'> {name}</span>
                <span className='price'>{price}</span>
            </div>

        
    </div>
)

export default CollectionItem