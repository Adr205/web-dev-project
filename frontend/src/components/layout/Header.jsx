import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
// import 'firebase/auth';
// import { useFirebaseApp, useUser } from 'reactfire';
import '../../assets/styles/Header.css';

const Header = ({apis}) => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        setError('')

        try {
            await logout();
            history.pushState('/login');
        } catch {
            setError('Failed to log out');
        }
    }
    // const firebase = useFirebaseApp();
    // const user = useUser();

    // const logout = async () => {
    //     await firebase.auth().signOut();
    // }

    return (
        <header>
            <Link to="/">
                <h1 className="title">GameRank</h1>
            </Link>
            <Link>
                <h2 onClick={handleLogout}>Log out</h2>
            </Link>
        </header>
    )
};

export default Header;