const library = {
    name: "Favour's Library",
    since: 2005,
    books: [
        {
            Title: "Shedding the Light",
            description: "I watched her shed away until there was nothing to give",
            author: "Chinua Achebe",
            numberOfOages: 300,
            reading: true
        },
        {
            Title: "Hannah",
            description: "Oh what to give in exchange for a child",
            author: "Kambili",
            numberOfOages: 254,
            reading: false
        },
        {
            Title: "Bewildered",
            description: "Death has given her that bewildered look",
            author: "Vincent Adigun",
            numberOfOages: 458,
            reading: true
        }
        
    ]
}
for (let i = 0; i < books.length; i++) {
    let book = books[i];

    if (book.readingStatus === true) {
        console.log(book.title);
    }
}