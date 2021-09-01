import PropTypes from 'prop-types';
// material
import { Card, CardHeader, Box, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

Label.propTypes = {
  title: PropTypes.string
};

export function Label({ title }) {
  return (
    <Typography variant="overline" component="p" gutterBottom sx={{ color: 'text.secondary' }}>
      {title}
    </Typography>
  );
}

Block.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object
};

export function Block({ title, sx, children }) {
  return (
    <Card
      sx={{ overflow: 'unset', position: 'unset', width: '100%', marginBottom: '10px', borderRadius: '0 0 16px 16px' }}
    >
      {title && <CardHeader title={title} />}
      <Box
        sx={{
          p: 1,
          minHeight: 150,
          ...sx
        }}
      >
        {children}
      </Box>
    </Card>
  );
}
