import React from 'react';
import { Flex, Text } from 'ustudio-ui';
import { Type } from '../../api/schema';
import Styled from './style';

import renderType from '../Type';

interface PropertyProps {
  name: string;
  description?: string;
  type: Type;
  isOptional?: boolean;
}

const Property: React.FC<PropertyProps> = ({ name, description, type, isOptional }) => {
  return (
    <Styled.Property direction="column">
      <Flex>
        <Styled.Name>{`${name}:`}</Styled.Name>

        {renderType(type)}
      </Flex>

      <Styled.Meta>
        {isOptional && (
          <Styled.Optional appearance={{ background: 'var(--c-light)', color: 'var(--c-darkest)' }}>
            optional
          </Styled.Optional>
        )}
        <Text variant="small">{description}</Text>
      </Styled.Meta>
    </Styled.Property>
  );
};

export default Property;
