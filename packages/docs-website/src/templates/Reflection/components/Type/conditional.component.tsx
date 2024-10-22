import React from 'react';
import Flex from 'ustudio-ui/components/Flex';

import { Conditional as ConditionalType } from '../../../../api/typings';
import { renderType } from './type.module';

const Conditional: React.FC<ConditionalType> = (conditional) => {
  return (
    <Flex direction="column">
      <Flex>
        {conditional.checkType.name} extends {renderType(conditional.extendsType)}
      </Flex>
      <Flex>?&#32;{renderType(conditional.trueType)} </Flex>
      <Flex>:&#32;{renderType(conditional.falseType)}</Flex>
    </Flex>
  );
};

export default Conditional;
