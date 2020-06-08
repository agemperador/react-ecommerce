import React from 'react'

import './sign-in-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'


const SignInUp = () => (

    <div className='sign-in-up'>
        
        <SignIn/>
        <SignUp/>

    </div>

)

export default SignInUp