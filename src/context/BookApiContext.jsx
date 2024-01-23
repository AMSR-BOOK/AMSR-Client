import React, { createContext, useContext } from 'react';
import Book from '../api/Book';
import FakeBookClient from '../api/fakeBookClient';

export const BookApiContext = createContext();

const client = new FakeBookClient();
const book = new Book(client);

export function BookApiProvider({ children }) {
  return (
    <BookApiContext.Provider value={{ book }}>
      {children}
    </BookApiContext.Provider>
  );
}

export function useBookApi() {
  return useContext(BookApiContext);
}
