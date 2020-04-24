import styled from 'styled-components';
import { Flex } from 'ustudio-ui';
import { withDisplayNames } from '../../utils';

const Breadcrumbs = styled(Flex)`
  flex-wrap: wrap;

  margin-bottom: var(--i-regular);
`;

export default withDisplayNames({ Breadcrumbs });
