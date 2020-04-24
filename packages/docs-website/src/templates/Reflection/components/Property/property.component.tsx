import React from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Tag from 'ustudio-ui/components/Tag';

import { Type } from '../../../../api/typings';
import Styled from './property.styles';

import { renderType } from '../Type';

interface PropertyProps {
  name: string;
  description?: string;
  type: Type;
  isOptional?: boolean;
  isInterfaceProp?: boolean;
}

const Property: React.FC<PropertyProps> = ({ name, description, type, isOptional, isInterfaceProp }) => {
  return (
    <Styled.Property direction="column">
      <Flex alignment={{ horizontal: 'space-between', vertical: 'start' }}>
        <Styled.Meta>
          <Styled.Name>{`${name}:`}</Styled.Name>

          <Styled.Type>{renderType(type)}</Styled.Type>
        </Styled.Meta>

        {!isOptional && isInterfaceProp && (
          <Tag appearance={{ background: 'var(--c-negative-light)', color: 'var(--c-lightest)' }}>required</Tag>
        )}
      </Flex>

      {description && <Styled.Description source={description} />}
    </Styled.Property>
  );
};

export default Property;
