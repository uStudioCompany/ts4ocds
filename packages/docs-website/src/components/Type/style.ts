import styled from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';

const Type = styled.span`
  ${Mixin.Font.codeRegular()};

  color: var(--c-primary);

  margin-left: var(--i-small);
  margin-top: 1px;
`;
Type.displayName = 'Type';

export default { Type };
