import React from 'react';
import { Link } from 'react-router-dom';
// import 'firebase/auth';
// import { useFirebaseApp, useUser } from 'reactfire';
import '../../assets/styles/Header.css';

const Header = ({apis}) => {
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
            {/* { user ? 
                <Link to="/login">
                    <h1>
                        Log out
                    </h1>
                </Link>
                : null } */}
        </header>
    )
};

export default Header;