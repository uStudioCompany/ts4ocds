import React, { ReactElement } from 'react';
import { Type } from '../../api/schema';

import Union from './Union';

const renderType = (type: Type): ReactElement => {
  switch (type.type) {
    case 'union': {
      return <Union {...type} />;
    }
    default: {
      return <p>type</p>;
    }
  }
};

export default renderType;
