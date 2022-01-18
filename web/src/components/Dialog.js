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
  Content,
  titleProps,
  contentProps,
  cacelButtonText,
  proceedButtonText,
  handleProceed
}) {
  const { t } = useTranslation();
  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
      <DialogTitle {...titleProps}>{t(title || 'dialog.dialog')}</DialogTitle>
      <DialogContent {...contentProps}>{Content}</DialogContent>
      <DialogActions>
        <Button onClick={handleProceed}>{t(proceedButtonText || 'dialog.proceed')}</Button>
        <Button autoFocus onClick={handleClose}>
          {t(cacelButtonText || 'dialog.cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogComponent;
