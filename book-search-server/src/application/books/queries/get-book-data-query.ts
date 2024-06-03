import { GetBookDataQuery } from '@application/common/types';
import { Dependencies } from '@infrastructure/di';
import { toBookDto } from '@application/common/dtos/book-dto';



export function makeGetBookDataQuery({
    bookClientService,
}: Pick<Dependencies, 'bookClientService'>) {
  return async function getBookDataQuery(query: GetBookDataQuery) {


    const { authorName, limit } = query;

    const dataSchema = await bookClientService.searchBooks({
      authorName,
      limit
    });

    
    return toBookDto({books: dataSchema});
  };
}
