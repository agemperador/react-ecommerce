import React from 'react'
import './directory.styles.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectDirectorySections} from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component'

const Directory  = ({sections}) => (  
        <div className='directory-menu'>
            {
            sections.map(({id,...sectionProps}) => (
                <MenuItem key={id} {...sectionProps}/>
            ))
            }
        </div>
);

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
})

export default connect(mapStateToProps,null)(Directory)