import { IBookSearchApiClient } from "@application/common/interfaces";
import { Book, GetBookDataQuery } from "@application/common/types";
import { Dependencies } from "@infrastructure/di";

export function makeBookClientService({
  axios,
}: Pick<Dependencies, "axios">): IBookSearchApiClient {
  return {
    
    async searchBooks(query: GetBookDataQuery): Promise<Book[]> {

      const queryParams = Object.entries(query)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key === 'authorName' ? 'search': key)}=${encodeURIComponent(String(value))}`)
        .join('&');
        

      const response = await axios.get(`https://freetestapi.com/api/v1/books?${queryParams}`);
      return response.data
    },
  };
}
