import React, { useState } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth';
import '../assets/styles/SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    // console.log(user.data);
    // console.log(user.data.email);

    return (
        <section className="signup-container">
            <div className="signup">
                <label htmlFor="email" className="signup-label">Email</label>
                <input type="email" className="signup-input" onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor="password" className="signup-label">Password</label>
                <input type="email" className="signup-input" onChange={(event) => setPassword(event.target.value)} />
                <button onClick={submit}>Sign Up</button>
                {
                    // user ? <h5>{user.data.email}</h5> : null
                    // console.log(typeof(user))
                    // console.log(user.data.email)
                }
            </div>
        </section>
    )
}

export default SignUp;