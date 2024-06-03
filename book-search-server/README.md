# Javascript Code Test

`BookSearchApiClient` is a simple class that makes a call to a http API to retrieve a list of books and return them.

You need to refactor the `BookSearchApiClient` class, and demonstate in `example-client.js` how it would be used. Refactor to what you consider to be production ready code. You can change it in anyway you would like and can use javascript or typescript.

Things you will be asked about:

1. How could you easily add other book seller APIs in the the future
2. How woud you manage differences in response payloads between differnt APIs without needing to make future changes to whatever code you have in example-client.js
3. How would you implement different query types for example: by publisher, by year published etc
4. How your code would be tested


# javascript-code-test

## Installation

1. Install project dependencies

Open two terminals, in the first terminal at the root of the `javascript-code-test` folder run

```shell
 yarn
```

2. Start the development server

   ```shell
    yarn start
   ```

## Project Architecture
This project utilizes [The Clean](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) principles which allow us to ensure the project is independent of frameworks, testable, decoupled from UI concerns, and independent of databases or any other external factors.

#### Domain

This contains all entities, however, it can also contain enums, exceptions, interfaces, types and logic specific to the business domain.

#### Application

This layer contains all application logic. It depends on the domain layer but has no dependencies on any other layer. This layer defines interfaces that are implemented by outside layers.

#### Infrastructure

This layer contains classes for accessing external resources such as databases. The implementations are based on the interfaces defined within the application layer.

#### Web

This layer is the entry point to the system and where I implemented the API endpoint etc. This layer depends on both the application and infrastructure layers, however, the dependency on infrastructure is only to support dependency injection.

