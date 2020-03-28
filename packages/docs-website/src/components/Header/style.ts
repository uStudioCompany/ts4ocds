import styled from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';

const Header = styled.header`
  background: var(--g-primary);
  padding: var(--i-regular);
`;
Header.displayName = 'Header';

const SiteTitle = styled.h1`
  ${Mixin.Font.h3()};
`;
SiteTitle.displayName = 'SiteTitle';

export default { Header, SiteTitle };
