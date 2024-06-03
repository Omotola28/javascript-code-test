import { Dependencies } from '@infrastructure/di';
import { makeGetBookDataQuery } from './queries/get-book-data-query';

export function makeBooksData(dependencies: Dependencies) {
  return {
    queries: {
      getBooksBySearchQuery:  makeGetBookDataQuery(dependencies),
    },
  };
}
