class Comment {
    constructor(id, gameId, date, author, text) {
        this.id = id;
        this.gameId = gameId;
        this.date = date;
        this.author = author;
        this.text = text;
    }
}

module.exports = Comment;