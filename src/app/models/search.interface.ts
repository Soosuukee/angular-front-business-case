import { Mapping } from './mapping.interface';

export interface Search {
  // '@type': string;
  template: string;
  variableRepresentation: string;
  mapping: Mapping[];
}
