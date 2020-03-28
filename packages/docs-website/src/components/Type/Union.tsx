import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import { ReflectionsMap, UnionType } from '../../api/schema';
import { isIntrinsic } from '../../api/validator';
import { useReflections } from '../../context/APIContext';

import Styled from './style';

const sortUnion = (union: UnionType, references: ReflectionsMap): ReactNode[] => {
  return union.types
    .filter((type) => !(isIntrinsic(type) && type.name === 'undefined'))
    .map((type) => {
      switch (type.type) {
        case 'intrinsic': {
          return type.name;
        }
        case 'stringLiteral': {
          return `'${type.value}'`;
        }
        case 'reference': {
          const reference = references[type.id];

          return <Link to={`${reference.module}/${reference.name}`}>{reference.name}</Link>;
        }
        case 'reflection': {
          // @ToDo: somehow parse a reflection type
          return '{}';
        }
        default: {
          return '';
        }
      }
    });
};

const Union: React.FC<UnionType> = (union) => {
  const references = useReflections();

  return <Styled.Type>{sortUnion(union, references).join(' | ')}</Styled.Type>;
};

export default Union;
