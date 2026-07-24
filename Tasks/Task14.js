const books = {
    title: "Monarchs by the Waterside",
    description: "The tales of the monarchs by the waterside, life is short but being a monarch is shorter",
    author: "Charles Babbage",
    numberOfPages: 456,
    reading: true,
    toggleReadingStatus: function() {
        if (books.reading === false) {
            books.reading = true;
        } else {
            books.reading = false;
        }
    }
}