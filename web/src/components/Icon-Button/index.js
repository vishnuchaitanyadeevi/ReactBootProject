import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';

// style
import './Icon-button.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0)
    }
  }
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div className="icon">
      <IconButton color="secondary" className="icon-button">
        <LocalPrintshopIcon fontSize="small" />
      </IconButton>
      <IconButton color="primary" className="icon-button">
        <BorderColorTwoToneIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" className="icon-button">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
