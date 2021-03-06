import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import {selectShopCollection} from '../../redux/shop/shop.selectors';


import './collection.styles.scss'

const CollectionPage = ({collection})=> {

    //component will unmount
    useEffect(()=>{
        console.log('Subscribing')
        return ()=>{
            console.log('Unsuscribing')
        }
    },[])
    
    const {title,items} = collection;
    return(
    <div className='collection-page'>

        <h2 className='title' >{title.toUpperCase()}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item ={item}/> )
            }
        </div>
    </div>
)};


const mapStateToProps = (state, ownProps) =>{
    return {collection: selectShopCollection(ownProps.match.params.collectionId)(state)}
    }

export default  connect(mapStateToProps,null)(CollectionPage);