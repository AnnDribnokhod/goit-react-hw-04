

import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar ({onSubmit} ) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search term');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
          className={styles.input}
          />
        <button type="submit"   className={styles.button}>Search</button>
      </form>
    </header>
  );
};
