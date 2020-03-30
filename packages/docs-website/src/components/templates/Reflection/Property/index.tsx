import React from 'react';
import { Flex, Badge } from 'ustudio-ui';
import { Type } from '../../../../api/typings';
import Styled from './style';

import { renderType } from '../Type';

interface PropertyProps {
  name: string;
  description?: string;
  type: Type;
  isOptional?: boolean;
}

const Property: React.FC<PropertyProps> = ({ name, description, type, isOptional }) => {
  return (
    <Styled.Property direction="column">
      <Flex alignment={{ horizontal: 'space-between' }}>
        <Flex>
          <Styled.Name>{`${name}:`}</Styled.Name>

          <Styled.Type>{renderType(type)}</Styled.Type>
        </Flex>

        {isOptional && <Badge appearance={{ background: 'var(--c-light)', color: 'var(--c-darkest)' }}>?</Badge>}
      </Flex>

      {description && <Styled.Description source={description} />}
    </Styled.Property>
  );
};

export default Property;
