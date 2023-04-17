import React from 'react';

import './login.css';

const Login = () => {
  return (
    <>
    {/*Left Banner */}
    <div className='left-side'>
        <h1>Board.</h1>
    </div>

    {/*Right Banner */}
    <div className='right-side'>

        {/*LOGIN Page */}
        <div className='right-div'>
        <h2>Sign In</h2>
        <h5 className='t1'>Sign in to your account</h5>

        {/*Google button */}
        <button className='google-button'><i class="ri-google-fill" style={{marginRight: '12px'}} ></i>Sign in with Google</button>
        {/*Apple Button */}
        <button className='apple-button'><i class="ri-apple-fill" style={{marginRight: '12px'}} ></i>Sign in with Apple</button>
        
        <div className='div-under'>
            {/*FORM Starting*/}
            <form >
                <label className='l1'>Email Address</label><br />
                <input className='i1' type='text' /><br />
                <label className='l1'>Password</label><br />
                <input className='i1' type='password'/>
                <h5 className='link' ><a>Forgot Password?</a></h5>
                <button className='submit-button'>SIGN IN</button>
            </form>
        </div>
        <h5 className='t2'>Don't have an account? <a className='link-register'>Register Here</a></h5>
        </div>
        {/*FORM Ending*/}
    </div>
    
    </>
  )
}

export default Login;