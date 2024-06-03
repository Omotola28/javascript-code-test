import { IRouter } from 'express';

function bookController({ router }: { router: IRouter }) {

  router.get('/v1/books/search', async function getBookByQuery(request, response, next) {
    try {

      const result = await request.container.resolve('books').queries.getBooksBySearchQuery({
        authorName: request.query.authorName?.toString(),
        limit: request.query.limit?.toString()
      });

      return response.status(202).json(result);
    } catch (error) {
      return next(error);
    }
  });

  return router;
}

export default bookController;
