// Don't delete code bellow and this code must be at the bottom of the file

let books: book[] = [];

type book = {
  title: string;
  author: string;
  publicationYear: number;
};

function addBook(title: string, author: string, publicationYear: number): void {
  if (!addBook) {
    console.log("should add a book and log the correct message");
    return;
  }
  const newBook: book = { title, author, publicationYear };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

function listBooks(): void {
  if (books.length === 0) {
    console.log("please add book first");
    return;
  }
  console.log("All Books:");
  for (const book of books) {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  }
}

function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  const results = books.filter((book) => book.title.includes(title));

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  for (const book of results) {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  }
}

export { addBook, listBooks, searchBook };
