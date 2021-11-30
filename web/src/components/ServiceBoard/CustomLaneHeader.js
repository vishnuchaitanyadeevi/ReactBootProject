import { Grid, Tooltip } from '@mui/material';
import { isArray } from 'lodash';

export default function CustomLaneHeader({ day, date, serviceMensOnLeave }) {
  return (
    <Grid className="custom-header-section">
      <header className="custom-header">
        {day} {date}
      </header>
      {isArray(serviceMensOnLeave) &&
        serviceMensOnLeave.map((men) => (
          <Tooltip title={men.name} arrow>
            <span
              className="service-men-on-leave"
              style={{ backgroundColor: men.colorCode, borderColor: men.colorCode }}
            />
          </Tooltip>
        ))}
      ;
    </Grid>
  );
}
