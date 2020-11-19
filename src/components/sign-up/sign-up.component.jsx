import React, {useState} from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss'

const SignUp = ()=>{

    const [userCredentials,setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword: '',
    })

    const {displayName, email,password, confirmPassword} = userCredentials;
    const handleSubmit = async event =>{
        event.preventDefault();

        if (password !== confirmPassword){
            alert("password don't match");
            return;
        }

        try{    
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user, {displayName})

            setUserCredentials({
                displayName:'',
                email:'',
                password:'',
                confirmPassword: '',
            })

        }catch(error){
            console.error(error);
        }
    };

    const handleChange = event => {
        const {name,value} = event.target;
        
        setUserCredentials({...userCredentials,[name] : value});
        
    }

    return(

        <div className='sign-up'>
            <h1 className='title'>I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type = 'text'
                    name = 'displayName'
                    label = 'Name'
                    value = {displayName}
                    onChange = {handleChange}
                    required
                />
                <FormInput 
                    type = 'email'
                    name = 'email'
                    label = 'Email'
                    value = {email}
                    onChange = {handleChange}
                    required
                />
                <FormInput 
                    type = 'password'
                    name = 'password'
                    label = 'Password'
                    value = {password}
                    onChange = {handleChange}
                    required
                />
                <FormInput 
                    type = 'password'
                    name = 'confirmPassword'
                    label = 'Confirm Password'
                    value = {confirmPassword}
                    onChange = {handleChange}
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>

            </form>

        </div>
    )


}

export default SignUp