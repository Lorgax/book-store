import { useState, useEffect } from "react";
import { library } from "../api/books.json";

export const useLibrary = () => {

  const genres = Array.from(new Set(library.map(({ book }) => book.genre)));

  const [genre, setGenre] = useState("");

  const filteredGenre = genre ? library.filter(({ book }) => {
    if (genre && book.genre !== genre) return false

    return true
  }) : library;

  const [readList, setReadList] = useState(JSON.parse(localStorage.getItem("savedBook")) || []);

  useEffect(() => {
    localStorage.setItem("savedBook", JSON.stringify(readList));
  }, [readList]);

  const handleReadList = (book, ISBN) => {

    if (readList.includes(book)) {
      const updatedReadList = readList.filter((book) => book.ISBN !== ISBN)
      setReadList(updatedReadList);
    } else {
      setReadList([...readList, book]);
    }

  };

  return {
    genres,
    genre,
    setGenre,
    filteredGenre,
    readList,
    handleReadList
  }

};
