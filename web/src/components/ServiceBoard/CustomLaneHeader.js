import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Tooltip, Popover } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { isArray } from 'lodash';

import { COLOR_CODES } from './data';
import { THEME } from '../../utils/constants';
import useSettings from '../../hooks/useSettings';

export default function CustomLaneHeader({ day, date, serviceMensOnLeave }) {
  const { t } = useTranslation();
  const { themeMode } = useSettings();
  const { DRK, LGT } = COLOR_CODES;

  const [colorCode, setColorCode] = useState(themeMode === THEME.LIGHT ? LGT : DRK);
  const {
    CARD: { BG, TXT }
  } = colorCode;

  const MAX_SHOW = 5;
  const [maxLeave, setMaxLeave] = useState(isArray(serviceMensOnLeave) && serviceMensOnLeave.length > MAX_SHOW);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    e.stopPropagation();
  };

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  useEffect(() => setColorCode(themeMode === THEME.LIGHT ? LGT : DRK), [themeMode]);

  return (
    <Grid className="custom-header-section" style={{ backgroundColor: BG, color: TXT }}>
      <header className="custom-header">
        {day} {date}
      </header>
      <Grid>
        {isArray(serviceMensOnLeave) && (
          <>
            {serviceMensOnLeave.slice(0, MAX_SHOW).map((men) => (
              <Tooltip title={men.name} arrow>
                <span
                  className="service-men-on-leave"
                  style={{ backgroundColor: men.colorCode, borderColor: men.colorCode }}
                />
              </Tooltip>
            ))}
            <ExpandMoreIcon className="show-more-icn" onClick={handleClick} style={{ color: TXT }} />
            <Popover
              id="more-servicemen"
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              {serviceMensOnLeave.map((men) => (
                <div className="service-men-on-leave-popover">
                  <span
                    className="service-men-on-leave mr-half-rm"
                    style={{ backgroundColor: men.colorCode, borderColor: men.colorCode }}
                  />
                  <span style={{ fontSize: '12px' }}>{men.name}</span>
                </div>
              ))}
            </Popover>
          </>
        )}
      </Grid>
    </Grid>
  );
}
