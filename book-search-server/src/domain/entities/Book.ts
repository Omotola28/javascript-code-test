export class Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publication_year: string;
  description: string;
  cover_image: string;

  constructor(
    id: string,
    title: string,
    author: string,
    genre: string,
    publication_year: string,
    description: string,
    cover_image: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publication_year = publication_year;
    this.description = description;
    this.cover_image = cover_image;
  }
}
