// src/hooks/useBookSearch.ts
import { useState, useCallback } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/v1/books/search/";

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  quantity: number;
  price: number;
}

interface UseBookSearchResult {
  books: Book[];
  loading: boolean;
  error: string | null;
  searchBooks: (
    params: Record<string, string | number | undefined>
  ) => Promise<void>;
}

export const useBookSearch = (): UseBookSearchResult => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchBooks = useCallback(
    async (params: Record<string, string | number | undefined>) => {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams(params as any).toString();

        const response = await axios.get(`${API_URL}?${queryParams}`);
        setBooks(response.data);
      } catch (err) {
        setError("Error fetching books");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { books, loading, error, searchBooks };
};
