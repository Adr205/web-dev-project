const config = {

    app: {
        port: process.env.PORT || 3000
    }, 

    db: {
        connectionUrl: process.env.MONGO_URL || 'mongodb+srv://a01242469:Ferrari2013@webproject.xkamh.mongodb.net/CRUDMongo?retryWrites=true&w=majority'
    },
    api :{
        
        GamesFeaturedApi : "https://api.rawg.io/api/games?key=f1671a2f11cf4f6989a92bb676eeaef4&ordering=-rating,&page=1&page_size=20",
        GamesSearchApi : "https://api.rawg.io/api/games?key=f1671a2f11cf4f6989a92bb676eeaef4&search=",
        GameSearchOrdering : "&ordering=-rating"
    }
}                                                

module.exports = config;