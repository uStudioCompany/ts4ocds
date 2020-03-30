import styled from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../utils';

const Header = styled.header`
  display: flex;
  align-items: center;

  background: linear-gradient(135deg, rgba(155, 175, 0, 0.5), rgba(0, 122, 204, 0.5)),
    linear-gradient(45deg, rgba(0, 122, 204, 0.5), rgba(155, 175, 0, 0.5)), var(--c-primary);
  padding: var(--i-regular);
`;

const SiteTitle = styled.h1`
  ${Mixin.Font.h3()};

  margin-right: var(--i-large);
`;

const ButtonsList = styled.ul`
  display: flex;

  margin: 0 calc(var(--i-medium) * -1);
`;

export default withDisplayNames({ Header, SiteTitle, ButtonsList });
