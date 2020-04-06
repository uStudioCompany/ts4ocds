import type { Intrinsic, Type } from '../typings';

export const isIntrinsic = (type: Type): type is Intrinsic => type.type === 'intrinsic';
