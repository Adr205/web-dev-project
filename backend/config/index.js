require('dotenv').config();

const config = {
    app: {
        dev: process.env.NODE_ENV !== 'production',
        port: process.env.PORT || 5000
    },
    db: {
        connectionUrl: process.env.MONGO_URL || 'mongodb+srv://raul:hola@cluster0.elel1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    }
    
}

module.exports = config;