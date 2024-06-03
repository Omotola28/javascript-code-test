import { createContainer, Resolver } from "awilix";
import {
  InfrastructureDependencies,
  makeInfrastructure,
} from "@infrastructure/di";
import {
  Dependencies as ApplicationDependencies,
  makeApplication,
} from "@application/di";


export type Dependencies = InfrastructureDependencies & ApplicationDependencies;


export function makeContainer(
  overrideDependencies: Partial<{
    [dependency in keyof InfrastructureDependencies]: Resolver<
      InfrastructureDependencies[dependency]
    >;
  }> = {} 
) {

  const container = createContainer();
  container.register({
    ...makeInfrastructure(), 
    ...makeApplication(),
    ...overrideDependencies,
  });


  return container;
}
