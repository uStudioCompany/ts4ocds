import type { Entity } from './top-level';
import type { Type } from './type';

export type Reflection = InterfaceReflection | TypeAliasReflection;

export interface InterfaceReflection extends Entity {
  kindString: 'Interface';
  children: string[];
}

export interface TypeAliasReflection extends Entity {
  kindString: 'Type alias';
  type: Type;
}
