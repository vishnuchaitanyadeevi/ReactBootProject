import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { VALID_FILE_FORMAT } from '../utils/constants';

const Input = styled('input')({ display: 'none' });

function UploadFile({ buttonName, accept, backgroundColor, startIcon, endIcon, handleFileChange }) {
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
        <Input accept={accept} id="contained-button-file" type="file" onChange={(e) => imageChanged(e)} />
        <Button
          variant="contained"
          style={{ backgroundColor }}
          startIcon={startIcon}
          endIcon={endIcon}
          component="span"
        >
          {buttonName}
        </Button>
      </label>
    </>
  );
}

export default UploadFile;
