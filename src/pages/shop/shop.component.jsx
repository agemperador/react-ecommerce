import React from 'react'
import {Route} from 'react-router-dom'

import CollectionPage from '../collection/collection.component'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'

import WithSpinner from '../../components/with-spinner/with-spinner.componnent'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage  extends React.Component{
    
    state = {
        loading:true
    }

    componentDidMount(){

        //Acá va lo de la carga de la base de datos
        const spinner = ()=>{
            this.setState({loading:false})
        }
        setTimeout(spinner,1000);
    }

    render(){
        const {match} = this.props;
        const {loading} =this.state;
        return (
            <div className= 'shop-page'>
                <Route exact path ={ `${match.path}`} render = {props=>
                                        <CollectionsOverviewWithSpinner 
                                            isLoading={loading} 
                                            {...props} />}/>
                <Route exact path ={`${match.path}/:collectionId`} render={props =>(
                                        <CollectionPageWithSpinner 
                                            isLoading={loading} 
                                            {...props} />
                )} />
            </div>
        )
    }
S}

export default ShopPage;