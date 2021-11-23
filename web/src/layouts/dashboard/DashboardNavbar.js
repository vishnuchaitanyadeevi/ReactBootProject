import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, experimentalStyled as styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
//
import { MHidden, MIconButton } from '../../components/@material-extend';
import AccountPopover from './AccountPopover';
import useOffSetTop from '../../hooks/useOffSetTop';
import DashboardSidebar from './DashboardSidebar';
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 55;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar, header, toggleSidebar }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebarOpen = () => toggleSidebar();
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar color={isHome ? 'transparent' : 'default'} sx={{ boxShadow: 0 }}>
      <ToolbarStyle
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        {/* <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }} size="large">
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden> */}
        <MIconButton
          onClick={handleSidebarOpen}
          sx={{
            ml: 1,
            ...(isHome && { color: 'common.white' }),
            ...(isOffset && { color: 'text.primary' })
          }}
        >
          <Icon icon={menu2Fill} />
        </MIconButton>
        <Logo />
        <h3 style={{ color: 'black' }}>{header}</h3>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5 }}>
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </AppBar>
  );
}
