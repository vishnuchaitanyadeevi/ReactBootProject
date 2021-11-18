import PropTypes from 'prop-types';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useDropzone } from 'react-dropzone';
import CancelIcon from '@mui/icons-material/Cancel';
// material
import { alpha } from '@mui/material/styles';
import { Box, List, Paper, Button, Typography, Grid } from '@mui/material';
import { MIconButton } from './@material-extend';

UploadMultiFile.propTypes = {
  error: PropTypes.bool,
  showPreview: PropTypes.bool,
  files: PropTypes.array,
  onRemove: PropTypes.func,
  onRemoveAll: PropTypes.func,
  sx: PropTypes.object
};

export default function UploadMultiFile({ files, onRemove, backgroundColor, startIcon, endIcon, ...other }) {
  const hasFile = files.length > 0;

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    ...other
  });

  const ShowRejectionItems = () => (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        mt: 3,
        borderColor: 'error.light',
        bgcolor: (theme) => alpha(theme.palette.error.main, 0.08)
      }}
    >
      {fileRejections.map(({ file, errors }) => {
        const { path, size } = file;
        return (
          <Box key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {path}
            </Typography>
            {errors.map((e) => (
              <Typography key={e.code} variant="caption" component="p">
                - {e.message}
              </Typography>
            ))}
          </Box>
        );
      })}
    </Paper>
  );

  return (
    <Box>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Button variant="contained" style={{ backgroundColor }} startIcon={startIcon} endIcon={endIcon}>
          Upload
        </Button>
      </div>

      {fileRejections.length > 0 && <ShowRejectionItems />}

      <List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
        {files.map((file) => {
          const { name, size, preview } = file;
          return (
            <Grid container spacing={3}>
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Brightness1Icon style={{ fontSize: '10px', marginRight: '1rem', color: 'green' }} />
                <Typography>{name}</Typography>
                <MIconButton edge="end" size="small" onClick={() => onRemove(file)}>
                  <CancelIcon style={{ cursor: 'pointer', color: 'red', fontSize: '18px' }} />
                </MIconButton>
              </Grid>
            </Grid>
          );
        })}
      </List>
    </Box>
  );
}
