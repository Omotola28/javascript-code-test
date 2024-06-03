import React, { useState } from 'react';
import { useBookSearch } from '../hooks/useBookSearch';

const BookSearch: React.FC = () => {
  const { books, loading, error, searchBooks } = useBookSearch();
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (params: Record<string, string | number | undefined>) => {
    searchBooks(params);
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter query parameter" 
      />
      <div>
        <button onClick={() => handleSearch({ authorName: inputValue })}>Search by Author</button>
        <button onClick={() => handleSearch({ limit: Number(inputValue) })}>Limit</button>
        <button onClick={() => handleSearch({ genre: inputValue })}>Search by Genre</button>
        <button onClick={() => handleSearch({ title: inputValue })}>Search by Title</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
