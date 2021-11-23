import { Outlet } from 'react-router-dom';
// material
import { Box, Container } from '@mui/material';
//

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
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
