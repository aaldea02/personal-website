import React, { useState } from 'react';
import './MomsBookClub.css';


const MomsBookClub = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchBookData = async () => {
    if (authors.length === 0) return;

    setLoading(true);
    try {
      const authorQuery = authors.map(author => `author=${author}`).join('&');
      const response = await fetch(`https://openlibrary.org/search.json?${authorQuery}`);
      const data = await response.json();
      const books = data.docs.map(book => ({
        title: book.title,
        author: book.author_name && book.author_name[0],
        coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg` : null,
      }));
      setBookList(books);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
    setLoading(false);
  };

  const addAuthor = () => {
    if (inputValue) {
      setAuthors([...authors, inputValue]);
      setInputValue('');
    }
  };

  const removeAuthor = (index) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Mom's Book Club</h1>
      <div>
        <label htmlFor="author-input">Add author:</label>
        <input
          id="author-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addAuthor}>Add</button>
      </div>
      <div>
        <h3>Selected authors:</h3>
        <ul>
          {authors.map((author, index) => (
            <li key={index}>
              {author} <button onClick={() => removeAuthor(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={fetchBookData} disabled={loading || authors.length === 0}>
        {loading ? 'Loading...' : 'Get book recommendations'}
      </button>
      {bookList.length > 0 && (
        <div>
          <h2>Book Recommendations:</h2>
          <ul>
            {bookList.map((book, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
                {book.coverUrl && (
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    style={{ marginRight: '1rem' }}
                  />
                )}
                <div>
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MomsBookClub;
