import { useState } from 'react';
import { Grid, Tooltip, Popover } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { isArray } from 'lodash';

export default function CustomLaneHeader({ day, date, serviceMensOnLeave }) {
  const MAX_SHOW = 5;
  const [maxLeave, setMaxLeave] = useState(isArray(serviceMensOnLeave) && serviceMensOnLeave.length > MAX_SHOW);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    e.stopPropagation();
  };

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <Grid className="custom-header-section">
      <header className="custom-header">
        {day} {date}
      </header>
      <Grid>
        {isArray(serviceMensOnLeave) &&
          serviceMensOnLeave.slice(0, MAX_SHOW).map((men) => (
            <Tooltip title={men.name} arrow>
              <span
                className="service-men-on-leave"
                style={{ backgroundColor: men.colorCode, borderColor: men.colorCode }}
              />
            </Tooltip>
          ))}
        {maxLeave && (
          <>
            <ExpandMoreIcon className="show-more-icn" onClick={handleClick} />
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
        ;
      </Grid>
    </Grid>
  );
}
