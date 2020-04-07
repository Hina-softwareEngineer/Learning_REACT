import React from 'react';
import FormInput from '../form-input/form-input.components';
import './sign-in.styles.scss';

import CustomButton from '../custom-buttom/custom-buttom.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props){
        super( props );

        this.state={
            email: '',
            password: ''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleSubmit= event=> {
        event.preventDefault();
        this.setState({email:'', password: ''})
    }

    handleChange= event => {
        const { value, name } = event.target;

        this.setState({ [name]:value });
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account!</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' 
                    type='email' 
                    value={this.state.email} 
                    label='Email'
                   handleChange={this.handleChange}
                    required />
         

                    <FormInput name='password' type='password'
                   handleChange={this.handleChange}
                   label='Password'
                    value={this.state.password} required />
                    
                    <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={ SignInWithGoogle } isGoogleSignIn>
                    
                    SIGN IN WITH GOOGLE </CustomButton>

                    </div>
                
                </form>
            </div>
        );
    }
}

export default SignIn;