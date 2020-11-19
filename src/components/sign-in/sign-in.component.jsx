import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth ,  signInWithGoogle } from '../../firebase/firebase.utils.js'

import './sign-in.styles.scss'




const SignIn = () => {

    const [userCredentials,setCredentials] = useState({email:'',password:''})

    const {email,password} = userCredentials;


    const handleSubmit = async event => {
        event.preventDefault();


        try {
            /* await auth.signInWithEmailAndPassword(email,password);
 */
            setCredentials({email:'', password:''});
        }catch(error){
            console.log(error);
        }
    };

    const handleChange = event =>{
        const {value,name} = event.target;

        setCredentials({...userCredentials, [name]:value })
    }


    return (
        <div className='sign-in'>
            <h1>I already have an account</h1>
            <span>Singn in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    handleChange={handleChange} 
                    value={email} 
                    label='Email'
                    />
                <FormInput 
                    name="password" 
                    type= 'password'
                    value={password} 
                    handleChange ={handleChange}
                    label = 'Password'
                    />
                <div className='buttons'>
                    
                <CustomButton type="submit">Sign In </CustomButton>
                <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>{''} Sign in with google {''}</CustomButton>

                </div>
            </form>
        </div>
    )
    

}

export default SignIn;