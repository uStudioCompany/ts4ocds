import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';

import { Type } from '../../../../api/typings';

import Conditional from './conditional.component';
import IndexedAccess from './indexed-access.component';
import Reference from './reference.component';
import Reflection from './reflection.component';
import Union from './union.component';

const StringLiteral = styled(Text)`
  color: var(--c-positive);
`;

export const renderType = (type: Type): ReactNode => {
  switch (type.type) {
    case 'typeParameter': {
      return `<${type.name}>`;
    }
    case 'intrinsic': {
      return type.name;
    }
    case 'stringLiteral': {
      return <StringLiteral variant="code">{`'${type.value}'`}</StringLiteral>;
    }
    case 'union': {
      return <Union {...type} />;
    }
    case 'intersection': {
      return <Union {...type} separator="&" />;
    }
    case 'reference': {
      return <Reference {...type} />;
    }
    case 'array': {
      return (
        <>
          {renderType(type.elementType)}
          []
        </>
      );
    }
    case 'reflection': {
      return <Reflection {...type} />;
    }
    case 'conditional': {
      return <Conditional {...type} />;
    }
    case 'indexedAccess': {
      return <IndexedAccess {...type} />;
    }
    default: {
      return '';
    }
  }
};
