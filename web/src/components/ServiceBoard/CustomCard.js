import { Grid } from '@mui/material';
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
          {service.audit && <span className="service-type-icons circle">A</span>}
          {service.maintenance && <span className="service-type-icons circle">M</span>}
          {service.refill && <span className="service-type-icons circle">R</span>}
          {service.callOut && <span className="service-type-icons circle">C</span>}
          {service.highene && (
            <span className="service-type-icons">
              <PanToolIcon className="service-icon" />
            </span>
          )}
          {service.scheduled && (
            <span className="service-type-icons">
              <HandymanIcon className="service-icon" />
            </span>
          )}
          {service.complete && (
            <span className="service-type-icons">
              <CheckCircleOutlinedIcon className="service-icon" />
            </span>
          )}
          {service.notCompleted && (
            <span className="service-type-icons">
              <RunningWithErrorsOutlinedIcon className="service-icon" />
            </span>
          )}
          {service.cancelled && (
            <span className="service-type-icons">
              <HighlightOffOutlinedIcon className="service-icon" />
            </span>
          )}
        </Grid>
        <Grid style={{ fontWeight: 'bold' }}>{address}</Grid>
      </Grid>
      {/* <div className="custom-card-section" style={{ color: '#4C4C4C' }}>
        <div>
          {startDate} [{occurences}]
        </div>
        <div>
          {service.audit && <span className="service-type-icons circle">A</span>}
          {service.maintenance && <span className="service-type-icons circle">M</span>}
          {service.refill && <span className="service-type-icons circle">R</span>}
          {service.callOut && <span className="service-type-icons circle">C</span>}
          {service.highene && (
            <span className="service-type-icons">
              <PanToolIcon className="service-icon" />
            </span>
          )}
          {service.scheduled && (
            <span className="service-type-icons">
              <HandymanIcon className="service-icon" />
            </span>
          )}
          {service.complete && (
            <span className="service-type-icons">
              <CheckCircleOutlinedIcon className="service-icon" />
            </span>
          )}
          {service.notCompleted && (
            <span className="service-type-icons">
              <RunningWithErrorsOutlinedIcon className="service-icon" />
            </span>
          )}
          {service.cancelled && (
            <span className="service-type-icons">
              <HighlightOffOutlinedIcon className="service-icon" />
            </span>
          )}
        </div>
        <div style={{ fontWeight: 'bold' }}>{address}</div>
      </div> */}
    </MovableCardWrapper>
  );
}
