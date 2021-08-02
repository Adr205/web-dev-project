import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import '../assets/styles/Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return (
        <section className="signup-container">
            <div className="signup">
                <label htmlFor="email" className="signup-label">Email</label>
                <input type="email" className="signup-input" onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor="password" className="signup-label">Password</label>
                <input type="email" className="signup-input" onChange={(event) => setPassword(event.target.value)} />
                <button onClick={login}>Sign Up</button>
                {
                    // user ? <h5>{user.data.email}</h5> : null
                    // console.log(typeof(user))
                    // console.log(user.data.email)
                }
            </div>
        </section>
    )
}

export default Login;