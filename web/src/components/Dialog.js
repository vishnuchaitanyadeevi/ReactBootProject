import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function DialogComponent({
  open,
  handleClose,
  maxWidth,
  Title,
  Content,
  Actions,
  titleProps,
  contentProps,
  actionProps
}) {
  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
      <DialogTitle {...titleProps}>{Title}</DialogTitle>
      <DialogContent {...contentProps}>{Content}</DialogContent>
      <DialogActions {...actionProps}>{Actions}</DialogActions>
    </Dialog>
  );
}

export default DialogComponent;
