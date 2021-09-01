import PropTypes from 'prop-types';
// material
import { useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Toolbar, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(() => ({
  minHeight: '50px'
}));

// ----------------------------------------------------------------------

SortingSelectingToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function SortingSelectingToolbar({ numSelected }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle
      style={{ minHeight: '40px' }}
      sx={{
        ...(numSelected > 0 && {
          color: isLight ? 'primary.main' : 'text.primary',
          bgcolor: isLight ? 'primary.lighter' : 'primary.dark'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : null}
    </RootStyle>
  );
}
