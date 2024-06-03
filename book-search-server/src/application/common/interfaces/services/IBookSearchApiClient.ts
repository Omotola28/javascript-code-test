import { Book, GetBookDataQuery } from "@application/common/types";

export interface IBookSearchApiClient {
    searchBooks(query: GetBookDataQuery): Promise<Book[]>;
  }