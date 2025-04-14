const getTheTitles = function(bookList) {
    bookTitles = []
    bookList.forEach(book => {
        bookTitles.push(book.title)
    });
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
