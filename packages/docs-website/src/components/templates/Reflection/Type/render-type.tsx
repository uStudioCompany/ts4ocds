import React, { ReactNode } from 'react';
import { Type } from '../../../../api/typings';
import Conditional from './Conditional';
import IndexedAccess from './IndexedAccess';
import Reference from './Reference';
import Reflection from './Reflection';
import Union from './Union';

const renderType = (type: Type): ReactNode => {
  switch (type.type) {
    case 'intrinsic': {
      return type.name;
    }
    case 'stringLiteral': {
      return `'${type.value}'`;
    }
    case 'union': {
      return <Union {...type} />;
    }
    case 'intersection': {
      return <Union {...type} separator={'&'} />;
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
      return <p>type</p>;
    }
  }
};

export default renderType;
