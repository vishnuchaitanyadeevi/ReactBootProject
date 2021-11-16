import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteWidget({
  id,
  options,
  label,
  disablePortal,
  autoCompleteOpt,
  autoHighlight,
  autoSelect,
  blurOnSelect,
  clearIcon,
  classes,
  clearText,
  closeText,
  defaultValue,
  disableClearable,
  disableCloseOnSelect,
  disabled,
  disabledItemsFocusable,
  disableListWrap,
  filterOptions,
  filterSelectedOptions,
  forcePopupIcon,
  freeSolo,
  fullWidth,
  getOptionLabel,
  groupBy,
  limitTags,
  loading,
  loadingText,
  multiple,
  noOptionsText,
  onChange,
  onClose,
  open,
  openText,
  popupIcon,
  renderGroup,
  size
}) {
  return (
    <Autocomplete
      disablePortal={disablePortal === undefined || disablePortal === null ? false : disablePortal}
      autoComplete={autoCompleteOpt === undefined || autoCompleteOpt === null ? false : autoCompleteOpt}
      autoHighlight={autoHighlight === undefined || autoHighlight === null ? false : autoHighlight}
      autoSelect={autoSelect === undefined || autoSelect === null ? false : autoSelect}
      blurOnSelect={blurOnSelect === undefined || blurOnSelect === null ? false : blurOnSelect}
      clearIcon={clearIcon === undefined || clearIcon === null ? undefined : clearIcon}
      classes={classes === undefined || classes === null ? {} : classes}
      clearText={clearText === undefined || clearText === null ? 'Clear' : clearText}
      closeText={closeText === undefined || closeText === null ? 'Close' : closeText}
      id={id}
      defaultValue={defaultValue === undefined || defaultValue === null ? null : defaultValue}
      disableClearable={disableClearable === undefined || disableClearable === null ? false : disableClearable}
      disableCloseOnSelect={
        disableCloseOnSelect === undefined || disableCloseOnSelect === null ? false : disableCloseOnSelect
      }
      disabled={disabled === undefined || disabled === null ? false : disabled}
      disabledItemsFocusable={
        disabledItemsFocusable === undefined || disabledItemsFocusable === null ? false : disabledItemsFocusable
      }
      disableListWrap={disableListWrap === undefined || disableListWrap === null ? false : disableListWrap}
      filterOptions={filterOptions === undefined || filterOptions === null ? undefined : filterOptions}
      filterSelectedOptions={
        filterSelectedOptions === undefined || filterSelectedOptions === null ? false : filterSelectedOptions
      }
      forcePopupIcon={forcePopupIcon === undefined || forcePopupIcon === null ? 'auto' : forcePopupIcon}
      freeSolo={freeSolo === undefined || freeSolo === null ? false : freeSolo}
      fullWidth={fullWidth === undefined || fullWidth === null ? false : fullWidth}
      getOptionLabel={getOptionLabel === undefined || getOptionLabel === null ? undefined : getOptionLabel}
      groupBy={groupBy === undefined || groupBy === null ? undefined : groupBy}
      limitTags={limitTags === undefined || limitTags === null ? -1 : limitTags}
      loading={loading === undefined || loading === null ? false : loading}
      loadingText={loadingText === undefined || loadingText === null ? false : loadingText}
      multiple={multiple === undefined || multiple === null ? false : multiple}
      noOptionsText={noOptionsText === undefined || noOptionsText === null ? 'No options' : noOptionsText}
      onChange={onChange === undefined || onChange === null ? undefined : onChange}
      onClose={onClose === undefined || onClose === null ? undefined : onClose}
      openText={openText === undefined || openText === null ? 'Open' : openText}
      popupIcon={popupIcon === undefined || popupIcon === null ? undefined : popupIcon}
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      size={size === undefined || size === null ? 'medium' : size}
    />
  );
}
