import { asFunction, Resolver } from 'awilix';
import { makeBooksData } from './books';

export type Dependencies = {
  books: ReturnType<typeof makeBooksData>;
};

export function makeApplication(): { [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]> } {
  return {
    books: asFunction(makeBooksData).scoped(),
  };
}
