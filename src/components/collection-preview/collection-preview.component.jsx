import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import {CollectionTitle} from  './collection-preview.styles'



import './collection-preview.styles.scss';

const CollectionsPreview = ({title, items}) =>{

    console.log(title);
    
    return(

    <div className='collection-preview'>
        <CollectionTitle  to={`shop/${title.toLowerCase()}`} >
            <h1>{title.toUpperCase()}</h1>
        </CollectionTitle>
        <div className='preview'>
            {
                items
                    .filter((item,idx)=>idx < 4)
                    .map((item) =>(
                        <CollectionItem key={item.id} item ={item} />
                
                ))}
        </div>
    </div>

)
}
export default CollectionsPreview