// material
import { experimentalStyled as styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import { LandingHero, LandingMinimal } from '../components/_external-pages/landing';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
      <LandingHero />
    </RootStyle>
  );
}
