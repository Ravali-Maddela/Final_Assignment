var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
];

const sortTitle = (library) => library.sort((a, b) => a.title.length - b.title.length);

//OR
const sortByTitle = (library) => {
  for (i = 0; i < library.length - 1; i++) {
    if (library[i].title.length > library[i + 1].title.length) {
      let value = library[i + 1];
      library[i + 1] = library[i];
      library[i] = value;
    }
  }
  return library;
};

console.log(sortByTitle(library));
console.log(sortTitle(library));
