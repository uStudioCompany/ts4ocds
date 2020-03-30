import type { Entity, InterfaceReflection } from '../typings';

export const isInterface = (entity: Entity): entity is InterfaceReflection => entity.kindString === 'Interface';

export const hasTypeParameter = (entity: Entity): boolean => Boolean(entity?.typeParameter);
