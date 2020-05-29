import React from 'react'
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component{

    constructor(){
        super()

        this.state= {
            section:[
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats',
                  size: 'little'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets',
                  size: 'little'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers',
                  size: 'little'

                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  id: 4,
                  linkUrl: 'shop/womens',
                  size: 'large',
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  id: 5,
                  linkUrl: 'shop/mens',
                  size: 'large'
                }
              ]
            }
    }


    render(){
        return(

        <div className='directory-menu'>
            {
            this.state.section.map(({id,...sectionProps}) => (
                <MenuItem key={id} {...sectionProps}/>
            ))
            }
        </div>
        )
    }
}


export default Directory