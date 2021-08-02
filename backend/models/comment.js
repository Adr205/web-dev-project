class Comment {
    constructor(id, gameId, date, author, text, title) {
        this.id = id;
        this.gameId = gameId;
        this.date = date;
        this.author = author;
        this.text = text;
        this.title = title;
    }
}

module.exports = Comment;