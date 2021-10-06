import { Builder, Registry } from "depinj-js";
import { registerControllers } from "./add-handlers";
import { registerServices } from "./add-services";

export function registerAll(): Registry {
  const builder = new Builder();

  const registers = [
    registerControllers,
    registerServices,
  ];

  const registry = registers
    .reduce((currBuilder, nextRegister) => nextRegister(currBuilder), builder)
    .build();

  return registry;
}