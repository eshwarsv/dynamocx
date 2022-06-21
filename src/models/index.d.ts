import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Modelling {
  readonly id: string;
  constructor(init: ModelInit<Modelling>);
  static copyOf(source: Modelling, mutator: (draft: MutableModel<Modelling>) => MutableModel<Modelling> | void): Modelling;
}