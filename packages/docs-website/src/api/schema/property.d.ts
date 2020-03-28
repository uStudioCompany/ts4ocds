import type { Entity } from './top-level';
import type { Type } from './type';

export interface Property extends Entity {
  kindString: 'Property';
  flags: {
    isOptional?: true;
  };
  comment?: {
    shortText: string;
  };
  type: Type;
}
