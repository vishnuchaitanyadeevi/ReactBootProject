import PropTypes from 'prop-types';
// material
import { experimentalStyled as styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
// components
import { MHidden } from '../components/@material-extend';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 192)
  }
}));

// ----------------------------------------------------------------------

AuthLayout.propTypes = {
  children: PropTypes.node
};

export default function AuthLayout({ children }) {
  return (
    <HeaderStyle>
      <MHidden width="smDown">
        <Typography
          variant="body2"
          sx={{
            mt: { md: -2 }
          }}
        >
          {children}
        </Typography>
      </MHidden>
    </HeaderStyle>
  );
}
