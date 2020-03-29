import styled from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';

const Header = styled.header`
  background: linear-gradient(135deg, rgba(155, 175, 0, 0.5), rgba(0, 122, 204, 0.5)),
    linear-gradient(45deg, rgba(0, 122, 204, 0.5), rgba(155, 175, 0, 0.5)), var(--c-primary);
  padding: var(--i-regular);
`;
Header.displayName = 'Header';

const SiteTitle = styled.h1`
  ${Mixin.Font.h3()};
`;
SiteTitle.displayName = 'SiteTitle';

export default { Header, SiteTitle };
