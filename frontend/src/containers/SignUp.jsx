import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

const SignUp = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    // console.log(user.data);
    // console.log(user.data.email);

    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={(event) => setEmail(event.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="email" onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={submit}>Sign Up</button>
            {
                user ? <h5>{user.data.email}</h5> : null
            }
        </div>
    )
}

export default SignUp;