import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={(event) => setEmail(event.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="email" onChange={(event) => setPassword(event.target.value)}/>
            <button>Log In</button>
        </div>
    )
}

export default Login;