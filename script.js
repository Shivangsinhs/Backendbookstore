const books = [
  { //Book 1
    isbn: "9780744016697",
    title: "The Legend of Zelda: Tri Force Heroes",
    author: "Prima Games",
    format: "Hardcover",
    price: 12.99,
    stock: 3,
  },
  { //Book2
    isbn: "9780099549482",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    format: "Paperback",
    price: 4.99,
    stock: 3,
  },
  { //Book3
    isbn: "9780744016680",
    title: "The Legend of Zelda: Tri Force Heroes",
    author: "Prima Games",
    format: "Paperback",
    price: 9.99,
    stock: 1,
  },
  { //book4
    isbn: "9780099549482",
    title: "Go Set A Watchman",
    author: "Harper Lee",
    format: "Audio Book CD",
    price: 10.89,
    stock: 2,
  },
  { //Book 5
    isbn: "9780099529125",
    title: "Catch-22",
    author: "Joseph Heller",
    format: "Paperback",
    price: 6.29,
    stock: 4,
  },
  { //Book6
    isbn: "9781785150289",
    title: "Go Set A Watchman",
    author: "Harper Lee",
    format: "Hardcover",
    price: 9.89,
    stock: 0,
  },
  { //book7
    isbn: "9780554579901",
    title: "A Clash of Kings",
    author: "George R. R. Martin",
    format: "Paperback",
    price: 5.95,
    stock: 5,
  },
  { //Book 8
    isbn: "9781853260001",
    title: "Pride and Prejudice",
    author: "Jane Austin",
    format: "Paperback",
    price: 0.99,
    stock: 4,
  },
  { //Book9
    isbn: "9781784871894",
    title: "Casino Royale",
    author: "Ian Fleming",
    format: "Hardcover",
    price: 6.79,
    stock: 1,
  },
  { //Book 10
    isbn: "9781913494217",
    title: "Guinness World Records 2023",
    author: "Guinness World Records",
    format: "Hardcover",
    price: 10.99,
    stock: 0,
  },
];
// Call function to print all the book
function printAllBooks() {
  books.forEach((book, index) => {
    printBook(book, index);
  });
}

// Call Function that is in Stock
function printInStock() {
  books.forEach((book, index) => {
    if (book.stock > 0) {
      printBook(book, index);
    }
  });
} // call function that should remove one item from stock for the given ISBN. If there are no copies in stock, it should display an alert with an error message.
function sell(isbn) {
  let didRemove = false;
  books.forEach((book, index) => {
    if (book.isbn === isbn) {
      books.splice(index, 1);
      didRemove = true;
    }
  });
  console.log("========================");
  if (didRemove) console.log("Book removed successfully..");
  else {
    alert("No Books were found with the give ISBN!");
    console.log("No Books were found with the given ISBN");
  }
  console.log("========================");
}


//Calling function to print  based on title
function printByTitle(title) {
  title = title.toLowerCase();
  let foundBooks = false;
  books.forEach((book, index) => {
    if (book.title.toLowerCase() === title) {
      foundBooks = true;
      printBook(book, index);
    }
  });
  if (!foundBooks) {
    console.log("========================");
    console.log("No Books were found with the given Title");
    console.log("========================");
  }
}
// Calling function based on author name
function printByAuthor(author) {
  author = author.toLowerCase();
  let foundBooks = false;
  books.forEach((book, index) => {
    if (book.author.toLowerCase() === author) {
      foundBooks = true;
      printBook(book, index);
    }
  });
  if (!foundBooks) {
    console.log("========================");
    console.log("No Books were found of the given Author.");
    console.log("========================");
  }
}
// Calling function that should print only the books which are under the specified price.
function printUnderPrice(price) {
  let foundBooks = false;
  books.forEach((book, index) => {
    if (book.price < price) {
      foundBooks = true;
      printBook(book, index);
    }
  });
  if (!foundBooks) {
    console.log("========================");
    console.log("No Books were found under the given price.");
    console.log("========================");
  }
}

function search(text) {
  text = text.toLowerCase();
  let foundBooks = false;
  books.forEach((book, index) => {
    if (
      book.author.toLowerCase() === text ||
      book.title.toLowerCase() === text
    ) {
      foundBooks = true;
      printBook(book, index);
    }
  });
  if (!foundBooks) {
    console.log("========================");
    console.log("No Books were found of this Name or this Author.");
    console.log("========================");
  }
}
function validISBN(isbn) {
  // check if isbn is a number.
  let isnum = /^\d+$/.test(isbn);
  if (isnum && isbn.length === 13) {
    const stringArray = isbn.split("");
    const numberArray = [];
    //  convert the array of strings to numbers
    for (let i = 0; i < stringArray.length; i++)
      numberArray.push(parseInt(stringArray[i]));
    // get the last check digit.
    let multiplier = 1;
    let product = 0;
    for (let i = 0; i < numberArray.length; i++) {
      const value = numberArray[i] * multiplier;
      product += value;
      if (multiplier === 1) multiplier = 3;
      else multiplier = 1;
    }
    const remainder = product % 10;
    if (remainder === 0) return true;
    else return false;
  } else {
    return false;
  }
}

function validateISBNs() {
  let foundInvalidISBNs = false;
  books.forEach((book, index) => {
    if (!validISBN(book.isbn)) {
      foundInvalidISBNs = true;
      printBook(book, index);
    }
  });
  if (!foundInvalidISBNs) {
    console.log("========================");
    console.log("All books in the list have valid ISBN.");
    console.log("========================");
  }
}

function printAllBooksSorted(sortedBy) {
  if (sortedBy === 1) {
    console.log("========================");
    console.log("Below is the list of books sorted in ascending order.");
    console.log("========================");
    function compare(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    books.sort(compare);
    printAllBooks();
  } else if (sortedBy === -1) {
    console.log("========================");
    console.log("Below is the list of books sorted in descending order.");
    console.log("========================");
    function compare(a, b) {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    }
    books.sort(compare);
    printAllBooks();
  } else {
    console.log("========================");
    console.log(
      "Invalid sorting order requested. Please Enter 1 for ascending order or -1 for descending order."
    );
    console.log("========================");
  }
}
function printBook(book, index) {
  console.log("========================");
  console.log(`Number: ${index}`);
  console.log(`Name: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Format: ${book.format}`);
  console.log(`Price: ${book.price}`);
  console.log(`In Stock: ${book.stock}`);
  let tempISBN = `${book.isbn[0]}${book.isbn[1]}${book.isbn[2]}-${book.isbn[3]}-${book.isbn[4]}${book.isbn[5]}${book.isbn[6]}-${book.isbn[7]}${book.isbn[8]}${book.isbn[9]}${book.isbn[10]}${book.isbn[11]}-${book.isbn[12]}`;
  console.log(`ISBN: ${tempISBN}`);
}

// function calls
{
  //printAllBooks();
  //printInStock();
  // sell("9780744016697");
  //printByTitle("The Legend of Zelda: Tri Force Heroes");
  printByAuthor("harper LEe");
  //printUnderPrice(5);
  //search(" Wings of wire");
  //validateISBNs();
  //please type  either 1 (ascending sort) or -1 (descending sort) for printing the books in any either sorting order.
  //printAllBooksSorted(1);
}

// From QUESTION 3 IMPLEMENTING BUBLE SORT AND SELECTION SORT

const numberArray = [];
function generateRandArray() {
  for (let i = 0; i < 100000; i++) {
    numberArray.push(Math.floor(Math.random() * 1000));
  }
}
//Function to call bubbble sort
function bubbleSort() {
  for (let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length - i - 1; j++) {
      if (numberArray[j] > numberArray[j + 1]) {
        let tempraryVariable = numberArray[j];
        numberArray[j] = numberArray[j + 1];
        numberArray[j + 1] = tempraryVariable;
      }
    }
  }
  console.log(numberArray);
}
//Function to call Selection  sort
function selectionSort(arr, n) {
  let bottomIndex;

  for (let i = 0; i < n - 1; i++) {
    bottomIndex = i;
    for (let j = i + 1; j < n; j++)
      if (numberArray[j] < numberArray[bottomIndex]) bottomIndex = j;
    let tempraryVariable = numberArray[bottomIndex];
    numberArray[bottomIndex] = numberArray[i];
    numberArray[i] = tempraryVariable;
  }
  console.log(numberArray);
}

//generateRandArray();
//console.log(numberArray);
//bubbleSort();
//selectionSort();
