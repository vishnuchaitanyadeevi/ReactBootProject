import { Outlet } from 'react-router-dom';
// material
import { Box, Container } from '@mui/material';
import AccountPopover from '../dashboard/AccountPopover';
//
import MainNavbar from './MainNavbar';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <AccountPopover />
      <div>
        <Outlet />
      </div>

      <Box
        sx={{
          bgcolor: 'background.default'
        }}
      >
        <Container>
          <h1>Welcome User</h1>
        </Container>
      </Box>
    </>
  );
}
