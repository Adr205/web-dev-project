'use strict';
const dotenv = require('dotenv');

dotenv.config();

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env

// const config = {
//     dev: process.env.NODE_ENV !== 'production',
//     port: process.env.PORT || 5000,
//     firebaseConfig = {
//         apiKey: process.env.API_KEY,
//         authDomain:process.env.AUTH_DOMAIN,
//         projectId: process.env.PROJECT_ID,
//         storageBucket: process.env.STORAGE_BUCKET,
//         messagingSenderId: process.env.MESSAGING_SENDER_ID,
//         appId: process.env.APP_ID
//     }
// }

module.exports = {
    port: 5000,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}