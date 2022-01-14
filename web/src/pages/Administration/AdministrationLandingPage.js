import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GroupIcon from '@mui/icons-material/Group';
import './AdministrationLandingPage.scss';

function AdministrationLandingPage() {
  const navigate = useNavigate();
  return (
    <Grid className="administration_main_cls">
      <Grid style={{ marginTop: 0 }} container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Administration
          </Typography>
        </Grid>
        <Grid style={{ marginTop: '2rem' }} item xs={12}>
          <Typography style={{ color: '#637381' }} variant="h6" align="center">
            What do you want to do?
          </Typography>
        </Grid>
      </Grid>

      <Grid style={{ marginTop: 0 }} container spacing={3}>
        <Grid item xs={2} style={{ cursor: 'pointer' }}>
          <Grid
            onClick={() => navigate('/userList')}
            style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
          >
            <IconButton style={{ backgroundColor: '#94b1bf', padding: '1rem' }}>
              <GroupIcon style={{ height: 50, width: 50, color: '#FFF' }} />
            </IconButton>
            <Typography style={{ color: '#637381', marginTop: '0.5rem' }} variant="h6">
              Users
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AdministrationLandingPage;
