import { Stack, Grid, Typography } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import { serviceTypes } from './data';
import { SERVICE_TYPES } from '../../utils/constants';
import './ServiceBoard.css';

const ServiceTypes = () => {
  const { COMPLETE, SCHEDULE, NOT_COMPLETE, CANCELLED, REFILL, MAINTENANCE, CALL_OUT, AUDIT } = SERVICE_TYPES;
  return (
    <Grid container spacing={3} className="service-type-grid">
      <Grid style={{ margin: '1rem' }} item xs={12} md={6} />
      <Grid style={{ margin: '1rem' }} item xs={12} md={5}>
        <Grid style={{ marginLeft: '4rem', marginBottom: '1rem' }} item xs={12} sm={12}>
          <Typography variant="h6">Service status icons:</Typography>
        </Grid>
        <Grid container className="service-mens-stack">
          {serviceTypes.map((service) => (
            <Stack>
              <span
                className="service-men-clr"
                style={{ backgroundColor: service.colorCode, borderColor: service.colorCode }}
              >
                {service.type === COMPLETE && <CheckCircleOutlinedIcon style={{ margin: '-4px' }} />}
                {service.type === SCHEDULE && <HandymanIcon style={{ margin: '1px', fontSize: '15px' }} />}
                {service.type === NOT_COMPLETE && <RunningWithErrorsOutlinedIcon style={{ fontSize: '15px' }} />}
                {service.type === REFILL && <span className="service-type-txt service-type-txt-clr">R</span>}
                {service.type === MAINTENANCE && <span className="service-type-txt service-type-txt-clr">M</span>}
                {service.type === CALL_OUT && <span className="service-type-txt">C</span>}
                {service.type === AUDIT && <span className="service-type-txt service-type-txt-clr">A</span>}
                {service.type === CANCELLED && <HighlightOffOutlinedIcon style={{ margin: '-4px' }} />}
              </span>
              <Typography variant="body2" gutterBottom ml="2rem" mr={1} mt="-1.3rem">
                {service.name}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceTypes;
