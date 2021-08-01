const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "?key=1a09ddc8112347efbd0fd64b34b5ef96";

const config = {

    app: {
        port: process.env.PORT || 3000
    }, 

    db: {
        connectionUrl: process.env.MONGO_URL || 'mongodb+srv://a01242469:Ferrari2013@webproject.xkamh.mongodb.net/CRUDMongo?retryWrites=true&w=majority'
    },
    api :{
        
        // UniqueGameSearch : "https://api.rawg.io/api/games/",
        GamesFeaturedApi : `${API_URL}${API_KEY}&ordering=-rating,&page=1&page_size=20`,
        GamesSearchApi : `${API_URL}${API_KEY}&search=`,
        GameSearchOrdering : "&ordering=-rating",
        API_KEY: `${API_KEY}`,
        API_URL: `${API_URL}`
    }
}                                                

module.exports = config;