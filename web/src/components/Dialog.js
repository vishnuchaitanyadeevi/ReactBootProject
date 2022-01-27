import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function DialogComponent({
  open,
  handleClose,
  maxWidth,
  title,
  content,
  titleProps,
  contentProps,
  isCancelButton = true,
  cacelButtonText,
  isProceedButton = true,
  proceedButtonText,
  handleProceed
}) {
  const { t } = useTranslation();
  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
      <DialogTitle {...titleProps}>{title}</DialogTitle>
      <DialogContent {...contentProps}>{content}</DialogContent>
      <DialogActions>
        {isProceedButton && <Button onClick={handleProceed}>{proceedButtonText || 'Proceed'}</Button>}
        {isCancelButton && (
          <Button autoFocus onClick={handleClose}>
            {cacelButtonText || 'Cancel'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default DialogComponent;
