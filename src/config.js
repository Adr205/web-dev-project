const config = {

    app: {
        port: process.env.PORT || 3000
    }, 

    db: {
        connectionUrl: process.env.MONGO_URL || 'mongodb+srv://a01242469:Ferrari2013@webproject.xkamh.mongodb.net/CRUDMongo?retryWrites=true&w=majority'
    },
    api :{
        Featured_Api : "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1",
        Images_Api : "https://image.tmdb.org/t/p/w1280",
        Search_Api : "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=",
        GamesFeaturedApi : "https://api.rawg.io/api/games?key=f1671a2f11cf4f6989a92bb676eeaef4&ordering=-rating,&page=1&page_size=20",
        GamesSearchApi : "https://api.rawg.io/api/games?key=f1671a2f11cf4f6989a92bb676eeaef4&search=",
        GameSearchOrdering : "&ordering=-rating"
    }
}                                                

module.exports = config;