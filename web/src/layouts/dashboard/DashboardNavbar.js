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

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 55;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: '#f8f9fa',
  [theme.breakpoints.up('lg')]: {
    width: `100%`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
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
    <RootStyle>
      <ToolbarStyle>
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

        <h3 style={{ color: 'black' }}>{header}</h3>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5 }}>
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
      {/* <DashboardSidebar isOpenSidebar={openSidebar} onCloseSidebar={handleSidebarOpen} /> */}
    </RootStyle>
  );
}
