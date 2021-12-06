import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Tooltip } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import PanToolIcon from '@mui/icons-material/PanTool';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';

import { COLOR_CODES } from './data';
import { THEME } from '../../utils/constants';
import useSettings from '../../hooks/useSettings';

import { MovableCardWrapper } from './styles/Base';

export default function CustomCard({
  onClick,
  className,
  name,
  startDate,
  occurences,
  address,
  companyName,
  service,
  cardStyle,
  cardColor
}) {
  const { t } = useTranslation();
  const { themeMode } = useSettings();
  const { DRK, LGT } = COLOR_CODES;

  const [colorCode, setColorCode] = useState(themeMode === THEME.LIGHT ? LGT : DRK);
  const {
    CARD: { BG, TXT }
  } = colorCode;

  useEffect(() => setColorCode(themeMode === THEME.LIGHT ? LGT : DRK), [themeMode]);

  return (
    <MovableCardWrapper
      onClick={onClick}
      style={{ ...cardStyle, backgroundColor: BG, color: TXT }}
      className={className}
    >
      <header
        className="custom-card-header"
        style={{
          backgroundColor: cardColor
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 'bold' }}>{name}</div>
        {/* {showDeleteButton && <DeleteButton onClick={clickDelete} />} */}
      </header>
      <Grid className="custom-card-section">
        <Grid>
          <Tooltip title={t('serviceDashboard.lastServiceDate')} arrow>
            <span>
              {startDate} [{occurences}]
            </span>
          </Tooltip>
        </Grid>
        <Grid>
          <span style={{ visibility: 'hidden' }}>''</span>
          {service.audit && (
            <Tooltip title={t('serviceDashboard.audit')} arrow>
              <span className="service-type-icons circle">A</span>
            </Tooltip>
          )}
          {service.maintenance && (
            <Tooltip title={t('serviceDashboard.maintenance')} arrow>
              <span className="service-type-icons circle">M</span>
            </Tooltip>
          )}
          {service.refill && (
            <Tooltip title={t('serviceDashboard.refill')} arrow>
              <span className="service-type-icons circle">R</span>
            </Tooltip>
          )}
          {service.callOut && (
            <Tooltip title={t('serviceDashboard.callOut')} arrow>
              <span className="service-type-icons circle">C</span>
            </Tooltip>
          )}
          {service.highene && (
            <Tooltip title={t('serviceDashboard.highene')} arrow>
              <span className="service-type-icons">
                <PanToolIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.scheduled && (
            <Tooltip title={t('serviceDashboard.scheduled')} arrow>
              <span className="service-type-icons">
                <HandymanIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.complete && (
            <Tooltip title={t('serviceDashboard.completed')} arrow>
              <span className="service-type-icons">
                <CheckCircleOutlinedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.notCompleted && (
            <Tooltip title={t('serviceDashboard.notCompleted')} arrow>
              <span className="service-type-icons">
                <RunningWithErrorsOutlinedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.cancelled && (
            <Tooltip title={t('serviceDashboard.canceled')} arrow>
              <span className="service-type-icons">
                <HighlightOffOutlinedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.getPermit && (
            <Tooltip title={t('serviceDashboard.canceled')} arrow>
              <span className="service-type-icons">
                <QuizRoundedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.permitReceived && (
            <Tooltip title={t('serviceDashboard.canceled')} arrow>
              <span className="service-type-icons">
                <EventNoteRoundedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.morningJob && (
            <Tooltip title={t('serviceDashboard.canceled')} arrow>
              <span className="service-type-icons">
                <WbSunnyRoundedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.dayJob && (
            <Tooltip title={t('serviceDashboard.canceled')} arrow>
              <span className="service-type-icons">
                <LightModeRoundedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
          {service.nightJob && (
            <Tooltip title={t('serviceDashboard.canceled')} arrow>
              <span className="service-type-icons">
                <Brightness4RoundedIcon className="service-icon" />
              </span>
            </Tooltip>
          )}
        </Grid>
        <Tooltip title={t('serviceDashboard.companyName')} arrow>
          <span className="custom-card-address">{companyName}</span>
        </Tooltip>
        <Tooltip title={t('serviceDashboard.companyName')} arrow>
          <span className="custom-card-address">{address}</span>
        </Tooltip>
      </Grid>
    </MovableCardWrapper>
  );
}
