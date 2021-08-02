const dotenv = require('dotenv');

dotenv.config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 5000,
    firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain:process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
    }
}

module.exports = config;