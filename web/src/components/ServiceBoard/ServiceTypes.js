import { useTranslation } from 'react-i18next';
import { Stack, Grid, Typography } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';

import { serviceTypes } from './data';
import { SERVICE_TYPES } from '../../utils/constants';
import './ServiceBoard.css';

const ServiceTypes = ({ showTitle = true, emptyGridLen = 6, iconsGridLen = 5, leftMrgn = '4rem' }) => {
  const { t } = useTranslation();
  const {
    COMPLETE,
    SCHEDULE,
    NOT_COMPLETE,
    CANCELLED,
    REFILL,
    MAINTENANCE,
    CALL_OUT,
    AUDIT,
    GET_PERMIT,
    PERMIT_RECEIVED,
    MORNING_JOB,
    DAY_JOB,
    NIGHT_JOB
  } = SERVICE_TYPES;

  const getServiceIcon = (icon) => {
    switch (icon) {
      case COMPLETE:
        return <CheckCircleOutlinedIcon style={{ margin: '-4px' }} />;
      case SCHEDULE:
        return <HandymanIcon style={{ margin: '1px', fontSize: '15px' }} />;
      case NOT_COMPLETE:
        return <SyncProblemIcon style={{ fontSize: '15px' }} />;
      case REFILL:
        return <span className="service-type-txt service-type-txt-clr">R</span>;
      case MAINTENANCE:
        return <span className="service-type-txt service-type-txt-clr">M</span>;
      case CALL_OUT:
        return <span className="service-type-txt">C</span>;
      case AUDIT:
        return <span className="service-type-txt service-type-txt-clr">A</span>;
      case CANCELLED:
        return <HighlightOffOutlinedIcon style={{ margin: '-4px' }} />;
      case GET_PERMIT:
        return <QuizRoundedIcon style={{ margin: '-4px' }} />;
      case PERMIT_RECEIVED:
        return <EventNoteRoundedIcon style={{ margin: '-4px' }} />;
      case MORNING_JOB:
        return <WbSunnyRoundedIcon style={{ margin: '-4px' }} />;
      case DAY_JOB:
        return <LightModeRoundedIcon style={{ margin: '-4px' }} />;
      case NIGHT_JOB:
        return <Brightness4RoundedIcon style={{ margin: '-4px' }} />;
      default:
        return '';
    }
  };

  return (
    <>
      {serviceTypes.map((service) => (
        <Stack style={{ padding: '0.5rem 0 0 0.5rem' }}>
          <span
            className="service-men-clr"
            style={{ backgroundColor: service.colorCode, borderColor: service.colorCode }}
          >
            {getServiceIcon(service.type)}
          </span>
          <Typography variant="body2" gutterBottom ml="2rem" mr={1} mt="-1.3rem">
            {t(`serviceDashboard.${service.type}`)}
          </Typography>
        </Stack>
      ))}
    </>
  );
};

export default ServiceTypes;
