import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
// components
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import { MHidden } from '../../components/@material-extend';
import sidebarConfig from './SidebarConfig';
import burgerLogo from '../../assets/images/logo.png';
import SkeletonNavbar from '../../components/skeletons/SkeletonNavbar';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderContent = (
    <Scrollbar
      sx={{ height: '100%', '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' } }}
    >
      <Box sx={{ px: 2.5, py: 4 }}>
        <Box component={RouterLink} to="/dashboard" sx={{ display: 'inline-flex' }}>
          <div>
            <img src={burgerLogo} alt="MyBurger" style={{ padding: '10px' }} />
            <hr />
          </div>
        </Box>
      </Box>
      {Loading && <SkeletonNavbar />}
      {!Loading && <NavSection navConfig={sidebarConfig} />}
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: { width: DRAWER_WIDTH, bgcolor: '#FBFCFC' }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
