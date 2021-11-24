import { Grid } from '@mui/material';

import ServiceBoard from '../components/ServiceBoard/ServiceBoard';
import ServiceMens from '../components/ServiceBoard/ServiceMens';
import ServiceTypes from '../components/ServiceBoard/ServiceTypes';

import '../components/ServiceBoard/ServiceBoard.css';

export default function ServiceDashboard() {
  return (
    <Grid className="service-men-grid">
      <ServiceBoard />
      <ServiceMens />
      <ServiceTypes />
    </Grid>
  );
}
