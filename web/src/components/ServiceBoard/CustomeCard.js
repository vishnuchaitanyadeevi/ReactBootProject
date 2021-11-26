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
  body,
  dueOn,
  cardColor,
  subTitle,
  tagStyle,
  escalationText,
  tags,
  // showDeleteButton = false,
  onDelete
}) {
  const clickDelete = (e) => {
    onDelete();
    e.stopPropagation();
  };

  return (
    <MovableCardWrapper onClick={onClick} style={cardStyle} className={className}>
      <header
        style={{
          borderBottom: '1px solid #eee',
          padding: 5,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#ffffff',
          backgroundColor: cardColor
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 'bold' }}>{name}</div>
        {/* {showDeleteButton && <DeleteButton onClick={clickDelete} />} */}
      </header>
      <div style={{ fontSize: 12, padding: '0 10px 10px 10px' }}>
        <div style={{ color: '#4C4C4C' }}>
          {startDate} [{occurences}]{service.audit && <span className="service-type-icons circle">A</span>}
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
        {/* <div style={{ padding: '5px 0px' }}>{address1}</div> */}
        <div style={{ fontWeight: 'bold' }}>{address}</div>
      </div>
    </MovableCardWrapper>
  );
}
