const config = {

    app: {
        port: process.env.PORT || 3000
    }, 

    db: {
        connectionUrl: process.env.MONGO_URL || 'mongodb+srv://a01242469:Ferrari2013@webproject.xkamh.mongodb.net/CRUDMongo?retryWrites=true&w=majority'
    },
    api :{
        
        GamesFeaturedApi : "https://api.rawg.io/api/games?key=1a09ddc8112347efbd0fd64b34b5ef96&ordering=-rating,&page=1&page_size=20",
        GamesSearchApi : "https://api.rawg.io/api/games?key=1a09ddc8112347efbd0fd64b34b5ef96&search=",
        GameSearchOrdering : "&ordering=-rating",
        UniqueGameSearch : "https://api.rawg.io/api/games/",
        API_Key : "?key=1a09ddc8112347efbd0fd64b34b5ef96"
    }
}                                                

module.exports = config;