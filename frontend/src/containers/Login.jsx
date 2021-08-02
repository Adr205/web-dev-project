import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// import 'firebase/auth';
// import { useFirebaseApp, useUser } from 'reactfire';
import '../assets/styles/Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const firebase = useFirebaseApp();
    // const user = useUser();

    // const login = async () => {
    //     try {
    //         await firebase.auth().signInWithEmailAndPassword(email, password);
    //         // <Redirect to="/"/>
    //     } catch(error) {
    //         alert(error);
    //     }
    // }

    return (
        <section className="signup-container">
            <div className="signup">
                <label htmlFor="email" className="signup-label">Email</label>
                <input type="email" className="signup-input" onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor="password" className="signup-label">Password</label>
                <input type="password" className="signup-input" onChange={(event) => setPassword(event.target.value)} />
                {/* <button onClick={login}>Log in</button> */}
            </div>
        </section>
    )
}

export default Login;