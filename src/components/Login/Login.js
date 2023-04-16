import React from 'react';

import './login.css';

const Login = () => {
  return (
    <>
    <div className='left-side'>
        <h1>Board.</h1>
    </div>
    <div className='right-side'>
        <div className='right-div'>
        <h2>Sign In</h2>
        <h5 className='t1'>Sign in to your account</h5>
        <button className='google-button'><i class="ri-google-fill" style={{marginRight: '12px'}} ></i>Sign in with Google</button>
        <button className='apple-button'><i class="ri-apple-fill" style={{marginRight: '12px'}} ></i>Sign in with Apple</button>
        <div className='div-under'>
            <form >
                <label className='l1'>Email Address</label><br />
                <input className='i1' type='text' /><br />
                <label className='l1'>Password</label><br />
                <input className='i1' type='password'/>
                <h5 className='link' ><a>Forgot Password?</a></h5>

                <button className='submit-button'>SIGN IN</button>
            </form>
        </div>

        <h5 className='t2'>Don't have an account ? <a className='link-register'>Register</a></h5>
        </div>

    </div>
    
    </>
  )
}

export default Login