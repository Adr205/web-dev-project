require('dotenv').config();

const config = {
    app: {
        dev: process.env.NODE_ENV !== 'production',
        port: process.env.PORT || 5000
    },
    db: {
        connectionUrl: process.env.MONGO_URL || 'mongodb://localhost/crud-mongo'
    }
    
}

module.exports = config;