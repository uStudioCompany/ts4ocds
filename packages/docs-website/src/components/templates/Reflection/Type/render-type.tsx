import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from 'ustudio-ui';
import { Type } from '../../../../api/typings';
import Conditional from './Conditional';
import IndexedAccess from './IndexedAccess';
import Reference from './Reference';
import Reflection from './Reflection';
import Union from './Union';

const StringLiteral = styled(Text)`
  color: var(--c-positive);
`;

const renderType = (type: Type): ReactNode => {
  switch (type.type) {
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

export default renderType;
