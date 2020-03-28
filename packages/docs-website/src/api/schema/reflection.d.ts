import type { Property } from './property';
import type { Entity } from './top-level';
import type { Type } from './type';

export type Reflection = InterfaceReflection | TypeAliasReflection;

export interface InterfaceReflection extends Entity {
  kindString: 'Interface';
  children: Property[];
  module: string;
}

export interface TypeAliasReflection extends Entity {
  kindString: 'Type alias';
  type: Type;
  module: string;
}

export interface VariableReflection extends Entity {
  kindString: 'Variable';
  type?: Type;
}
