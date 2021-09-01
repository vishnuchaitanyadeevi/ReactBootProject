import { Outlet } from 'react-router-dom';
// material
import { Box, Container } from '@material-ui/core';
//
import MainNavbar from './MainNavbar';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
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
