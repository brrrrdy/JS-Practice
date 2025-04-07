function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    const readStatus = this.read ? "read" : "not read";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);
console.log(theHobbit.valueOf());
