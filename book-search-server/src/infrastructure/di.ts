import { asFunction, asValue, Resolver } from 'awilix';
import axios, { AxiosStatic } from 'axios';
import * as Interfaces from '@application/common/interfaces';
import * as services from '@infrastructure/services'

export type InfrastructureDependencies = {
  bookClientService: Interfaces.IBookSearchApiClient;
  axios: AxiosStatic;
};

export type Dependencies = InfrastructureDependencies

export function makeInfrastructure(): {
  [dependency in keyof InfrastructureDependencies]: Resolver<InfrastructureDependencies[dependency]>;
} {

  return {
    bookClientService: asFunction(services.makeBookClientService).scoped(),
    axios: asValue(axios)
  };
}
