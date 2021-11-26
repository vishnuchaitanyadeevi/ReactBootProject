import { Stack, Grid, Typography } from '@mui/material';

import { serviceMens } from './data';
import './ServiceBoard.css';

const ServiceMens = () => (
  <Grid container spacing={3}>
    <Grid style={{ margin: '1rem' }} item xs={12} sm={12}>
      <Typography variant="h6">Servicemen:</Typography>
    </Grid>
    <Grid container className="service-mens-stack">
      {serviceMens.map((men) => (
        <Stack>
          <span className="service-men-clr" style={{ backgroundColor: men.colorCode, borderColor: men.colorCode }} />
          <Typography variant="body2" gutterBottom ml="2rem" mr={1} mt="-1.3rem">
            {men.name}
          </Typography>
        </Stack>
      ))}
    </Grid>
  </Grid>
);

export default ServiceMens;
