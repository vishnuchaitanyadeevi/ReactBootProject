import { Grid, Tooltip } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import PanToolIcon from '@mui/icons-material/PanTool';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import { MovableCardWrapper } from './styles/Base';

export default function CustomCard({
  onClick,
  className,
  name,
  startDate,
  occurences,
  address,
  service,
  cardStyle,
  cardColor
}) {
  return (
    <MovableCardWrapper onClick={onClick} style={cardStyle} className={className}>
      <header
        className="custom-card-header"
        style={{
          backgroundColor: cardColor
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 'bold' }}>{name}</div>
        {/* {showDeleteButton && <DeleteButton onClick={clickDelete} />} */}
      </header>
      <Grid className="custom-card-section" style={{ color: '#f1f1f1' }}>
        <Grid>
          {startDate} [{occurences}]
        </Grid>
        <Grid>
          <span style={{ visibility: 'hidden' }}>''</span>
          {service.audit && (
            <Tooltip title="Audit" arrow>
              <span className="service-type-icons circle">A</span>
            </Tooltip>
          )}
          {service.maintenance && (
            <Tooltip title="Audit" arrow>
              <span className="service-type-icons circle">M</span>
            </Tooltip>
          )}
          {service.refill && (
            <Tooltip title="Refill" arrow>
              <span className="service-type-icons circle">R</span>
            </Tooltip>
          )}
          {service.callOut && (
            <Tooltip title="CallOut" arrow>
              <span className="service-type-icons circle">C</span>
            </Tooltip>
          )}
          {service.highene && (
            <Tooltip title="Highene" arrow>
              <span className="service-type-icons">
                <PanToolIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.scheduled && (
            <Tooltip title="Scheduled" arrow>
              <span className="service-type-icons">
                <HandymanIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.complete && (
            <Tooltip title="Completed" arrow>
              <span className="service-type-icons">
                <CheckCircleOutlinedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.notCompleted && (
            <Tooltip title="Not Completed" arrow>
              <span className="service-type-icons">
                <RunningWithErrorsOutlinedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.cancelled && (
            <Tooltip title="Canceled" arrow>
              <span className="service-type-icons">
                <HighlightOffOutlinedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
        </Grid>
        <span className="custom-card-address">{address}</span>
      </Grid>
    </MovableCardWrapper>
  );
}
