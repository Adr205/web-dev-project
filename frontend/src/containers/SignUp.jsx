import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { useFirebaseApp, useUser } from 'reactfire';
// import 'firebase/auth';
import { useAuth } from '../contexts/AuthContext';
import '../assets/styles/SignUp.css';

const SignUp = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !==
        passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    // const firebase = useFirebaseApp();

    // const submit = async () => {
    //     await firebase.auth().createUserWithEmailAndPassword(email, password);
    // }

    // console.log(user.data);
    // console.log(user.data.email);

    return (
        <section className="signup-container">
            {/* {currentUser.email} */}
            {error && alert(error)}
            <form className="signup" onSubmit={handleSubmit}>
                <label className="signup-label">Email</label>
                <input type="email" className="signup-input" ref={emailRef} />
                <label className="signup-label">Password</label>
                <input type="password" className="signup-input" ref={passwordRef} />
                <label className="signup-label">Password Confirmation</label>
                <input type="password" className="signup-input" ref={passwordConfirmRef} />
                <button disabled={loading} type="submit">Sign Up</button>
                <h2>Already have an account? <Link to="/login">Sign Up</Link></h2>
            </form>
        </section>
    )
}

export default SignUp;