import React, { useRef } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, Typography, Grid } from '@mui/material';
import { VALID_FILE_FORMAT } from '../utils/constants';

function UploadFile({
  buttonName,
  accept,
  backgroundColor,
  startIcon,
  endIcon,
  handleFileChange,
  fileName,
  handleDelete
}) {
  const inputRef = useRef(null);

  const uploadPic = (e) => {
    // e.persist();
    inputRef.current?.click();
  };

  const imageChanged = (event) => {
    const [filesArray] = event.target.files;
    const fileType = filesArray.name.split('.').pop();
    if (VALID_FILE_FORMAT.INVOICES_LIST.includes(fileType)) {
      handleFileChange(event);
      alert('Upload Success');
    } else {
      alert('Invalid File Type');
    }
  };

  return (
    <>
      <label htmlFor="contained-button-file">
        <input accept={accept} ref={inputRef} type="file" onChange={imageChanged} style={{ display: 'none' }} />
        <Button
          variant="contained"
          style={{ backgroundColor }}
          startIcon={startIcon}
          endIcon={endIcon}
          component="span"
          onClick={(e) => uploadPic(e)}
          type="file"
        >
          {buttonName}
        </Button>
        {fileName && (
          <Grid item xs={12} sm={12} style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <Typography style={{ marginLeft: '1rem' }}>{fileName}</Typography>
            <CancelIcon onClick={handleDelete} style={{ cursor: 'pointer', color: 'red', marginLeft: '0.5rem' }} />
          </Grid>
        )}
      </label>
    </>
  );
}

export default UploadFile;
