import styled from 'styled-components';
import { Flex, Text } from 'ustudio-ui';

const Reflection = styled(Flex)`
  width: 100%;
`;
Reflection.displayName = 'Reflection';

const PropertyList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;

  margin-top: var(--i-large);
`;
PropertyList.displayName = 'PropertyList';

const Description = styled(Text)`
  color: var(--c-dark);
`;
Description.displayName = 'Description';

export default { Reflection, PropertyList, Description };
