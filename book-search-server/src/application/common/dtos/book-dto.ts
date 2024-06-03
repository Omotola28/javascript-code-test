import { Book } from '../types';

export type BookDtoParams = {
//   count: number;
//   pageNumber: string;
//   pageSize: string;
  books: Array<Book>;
};


export function toBookDto({ books }: BookDtoParams) {
    return books.map(item => ({
      id: item.id,
      title: item.title,
      author: item.author, 
      genre: item.genre,
      publication_year: item.publication_year,
      description: item.description,
      cover_image: item.cover_image,
    }));
  }