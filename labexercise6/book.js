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
book.desc = "one of the giants of modern thinking about high performance” (Alex Hutchinson)—flips the script on the pursuit of excellence, shifting our thinking from high-stress survival mode to fulfillment-oriented thriving mode to creates sustainable success at the highest level, in what Amy Morin, author of 13 Things Mentally Strong People Don’t Do calls “an essential read for anyone interested in self-discovery and meaningful success."
console.log("Update description: ", book.desc)

// Create an array of 5 books objects
let bookCopies = []
for (let i=0; i<5; i++){
    bookCopies.push({...book})
}
console.log("Array of 5 Book Objects: ", bookCopies)