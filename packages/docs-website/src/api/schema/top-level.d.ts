import type { Reflection } from './reflection';
import type { Type } from './type';

export interface ReflectionsMap {
  [id: number]: Reflection;
}

export interface Entity {
  id: number;
  name: string;
  kindString: string;
  typeParameter?: TypeParameter[];
}

export interface TypeParameter extends Entity {
  kindString: 'Type parameter';
  type: Type;
}

export interface Module extends Entity {
  kindString: 'Module';
  children: Reflection[];
}
