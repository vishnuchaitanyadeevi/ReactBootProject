import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = ({
  title,
  description,
  isOpen,
  handleClose,
  onClick,
  negativeText,
  positiveText,
  handleSubmit,
  dialogContent,
  handleNegative
}) => {
  console.log('calling Component...');
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
        {dialogContent}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{negativeText}</Button>
        <Button onClick={handleSubmit} autoFocus>
          {positiveText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
