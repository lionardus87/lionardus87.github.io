let book = {
    title: "Win the Inside Game",
    desc: "In this highly anticipated book, the bestselling author of Do Hard Things Steve Magness",
    author: "Steve Magness",
    pages: 320,
}

// Printing book list
console.log("Title: ", book.title)
console.log("Description: ", book.descr)
console.log("Author: ", book.author)
console.log("Pages: ", book.pages)
console.log("Book Object: ", book)

// Update book description
book.desc = "One of the giants of modern thinking about high performance"
console.log("Updated description: ", book.desc)

// Create an array of 5 books objects
let bookCopies = []
for (let i=0; i<5; i++){
    let bookNumber = {bookId: i+1, book}
    bookCopies.push(bookNumber)
}
console.log("Array of 5 Book Objects: ", bookCopies)