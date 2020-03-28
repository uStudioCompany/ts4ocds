import styled from 'styled-components';
import { Tag, Flex, Text } from 'ustudio-ui';

const Property = styled(Flex)`
  width: 100%;

  padding: var(--i-large);

  background-color: var(--c-lightest);
  border-radius: var(--border-radius);
  box-shadow: var(--neumo-shadow);
`;
Property.displayName = 'Property';

const Name = styled(Text).attrs(() => ({
  appearance: 'bold',
}))`
  margin-right: var(--i-medium);
`;
Name.displayName = 'Name';

const Meta = styled(Text)`
  margin-top: var(--i-small);
  color: var(--c-dark);
`;
Meta.displayName = 'Meta';

const Optional = styled(Tag)`
  margin-right: var(--i-medium);
`;
Optional.displayName = 'Optional';

export default { Property, Name, Meta, Optional };
