const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  {
    id: 1,
    author: "Тесс Герітсен",
    name: "Хірург",
    isReading: 5,
    startCount: 5,
  },
  {
    id: 2,
    author: "Тесс Герітсен",
    name: "Асистент",
    isReading: 5,
    startCount: 5,
  },
  {
    id: 3,
    author: "Айн Ренд",
    name: "Атлант розправив плечі",
    isReading: 5,
    startCount: 5,
  },
  {
    id: 4,
    author: "Ілларіон Павлюк",
    name: "Я бачу, вас цікавить пітьма",
    isReading: 5,
    startCount: 5,
  },
  {
    id: 5,
    author: "Фріда Фаден",
    name: "Ніколи не бреши",
    isReading: 5,
    startCount: 5,
  },
];

function library() {
  let currentAction = prompt("Choose action: take, return, add");

  if (currentAction === null) {
    alert("Goodbye!");
    return;
  }

  if (!currentAction) {
    alert("Type some action!");
    return;
  }

  currentAction = currentAction.toLowerCase().trim();

  switch (currentAction) {
    case "take":
      takeBook();
      return;
    case "return":
      returnBook();
      return;
    case "add":
      addBook();
      return;
    default:
      alert("Incorrect action, try again!");
      return;
  }
}

function takeBook() {
  const booksList = books.map((book) => book.name).join("\n");

  let currentBookName = prompt(`Enter name or author you want: \n${booksList}`);

  if (currentBookName === null || !currentBookName) {
    alert("Type book name!");
    return;
  }

  const spaceIndex = currentBookName.indexOf(" ");

  if (spaceIndex === -1) {
    currentBookName =
      currentBookName[0].toUpperCase() +
      currentBookName.slice(1).toLowerCase().trim();
  } else {
    currentBookName =
      currentBookName[0].toUpperCase() +
      " " +
      currentBookName
        .slice(spaceIndex + 1)
        .toLowerCase()
        .trim();
  }

  const selectedBook = books.find((book) => book.name === currentBookName);
  // console.log(selectedBook);

  if (!selectedBook) {
    alert("We do not have this book in library, but you can add this book!");
    return;
  }

  if (selectedBook.isReading === 0) {
    alert("Sorry somebody read this book right now!");
    return;
  }

  selectedBook.isReading -= 1;

  alert(`Number of books available for reading ${selectedBook.isReading}`);
  alert(`Success! Your book id: ${selectedBook.id}`);
}

function returnBook() {
  const returnedBookID = Number(prompt("Enter book id for return!"));

  const isTrueID = books.find((book) => book.id === returnedBookID);

  if (!returnedBookID || !isTrueID) {
    alert("Please enter book id or wrong id!");
    return;
  }

  if (isTrueID.isReading >= isTrueID.startCount || !isTrueID) {
    alert("Oh no, you do not take this book! Try again!");
    return;
  }

  isTrueID.isReading += 1;

  alert(`Number of books available for reading ${isTrueID.isReading}`);
  alert("You book returned is successful!");
}

function addBook() {
  const newBook = {};

  let bookCount;
  let bookName = prompt("Enter your book name!");
  let bookAuthor = prompt("Enter author!");
  let ID = generateID();

  if (!bookName || !bookAuthor) {
    alert("Type author and name!");
    return;
  }

  bookName = bookName[0].toUpperCase() + bookName.slice(1).toLowerCase().trim();

  const spaceIndex = bookAuthor.indexOf(" ");

  if (spaceIndex === -1) {
    bookAuthor =
      bookAuthor[0].toUpperCase() + bookAuthor.slice(1).toLowerCase().trim();
  } else {
    bookAuthor =
      bookAuthor[0].toUpperCase() +
      bookAuthor.slice(1, spaceIndex).toLowerCase() +
      " " +
      bookAuthor[spaceIndex + 1].toUpperCase() +
      bookAuthor
        .slice(spaceIndex + 2)
        .toLowerCase()
        .trim();
  }

  const sameBook = books.find(
    (book) => book.name === bookName && book.author === bookAuthor
  );

  if (!sameBook) {
    bookCount = Number(prompt("Enter book quantity!"));

    if (!bookCount || bookCount === 0 || isNaN(bookCount)) {
      alert("Type valid number!");
      return;
    }

    newBook.id = ID;
    newBook.author = bookAuthor;
    newBook.name = bookName;
    newBook.isReading = bookCount;
    newBook.startCount = bookCount;

    books.push(newBook);
    alert(`You add the book, thank you! ${bookName} - ${bookAuthor}`);
  } else {
    alert("We already have this book!");
    const goodChoice = confirm("You want add more books for us?");

    if (!goodChoice) {
      alert("Okay, goodbye!");
      return;
    }
    bookCount = Number(prompt("Enter book quantity!"));

    Number((sameBook.isReading += bookCount));
    Number((sameBook.startCount += bookCount));

    alert(`You add the book, thank you for new ${bookCount} books`);
  }
}

function generateID() {
  let ID;
  let stop = true;

  do {
    ID = Math.ceil(Math.random() * 1000);
    stop = books.find((book) => book.id === ID);
  } while (stop);

  return ID;
}
