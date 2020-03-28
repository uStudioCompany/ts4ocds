import type { Entity, InterfaceReflection, TypeAliasReflection, TypeParameter } from '../schema';
import { Property } from '../schema/property';

export const isProperty = (entity: Entity): entity is Property => entity.kindString === 'Property';

export const isInterface = (entity: Entity): entity is InterfaceReflection => entity.kindString === 'Interface';

export const isTypeAlias = (entity: Entity): entity is TypeAliasReflection => entity.kindString === 'Type alias';

export const isTypeParameter = (entity: Entity): entity is TypeParameter => entity.kindString === 'Type parameter';
