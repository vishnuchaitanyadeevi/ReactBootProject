import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Grid, Typography, Button, Divider, Tabs, Tab, Box } from '@mui/material';
import SimpleTable from '../../../components/table/simpleTable';
import { InternalUserTableData } from './Data';
import Filters from '../../../components/Filter/filter';
import AlertDialog from '../../../components/AlertDialog';
import { COMPONENTS } from '../../../utils/constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../../../components/ServiceBoard/data';
import { POST_OFFICE } from '../../../redux/constants';
import './UserList.scss';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function userListTabProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function UserList() {
  const [value, setValue] = useState(0);
  const [internalUserData, setInternalUserData] = useState([]);
  const [confirmUser, setConfirmUser] = useState(false);
  const masterData = useSelector((state) => state.MasterDataReducer);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { t } = useTranslation();

  useEffect(() => {
    getInternalUserData();
  }, []);

  const getInternalUserData = () => {
    if (InternalUserTableData) {
      const displayData = [];
      InternalUserTableData.map((item) =>
        displayData.push({
          name: item.name,
          userName: item.userName,
          email: item.email,
          mobileNo: item.mobileNo,
          shortName: item.shortName,
          edit: null,
          delete: null,
          id: item.id
        })
      );
      if (displayData.length > 0) {
        setInternalUserData(displayData);
      }
      console.log('displayData....', displayData);
    }
  };

  // Handle alert dialog success method
  const handleAlertDialogSubmit = () => {
    console.log('calling...yes');
    setConfirmUser(false);
  };
  // Handle alert dialog close method
  const handleAlertDialogClose = () => {
    console.log('calling...No');
    setConfirmUser(false);
  };

  const handleClickEdit = (val) => console.log('Edit Data...', val);
  const handleClickConfirm = (val) => {
    console.log('Delete Data...', val);
    setConfirmUser(true);
  };

  const columnForInternalUser = [
    { field: 'name', header: `${t('userList.name')}`, sortable: true, filter: true },
    { field: 'userName', header: `${t('userList.userName')}`, sortable: true, filter: true },
    { field: 'email', header: `${t('userList.email')}`, sortable: true, filter: true },
    { field: 'mobileNo', header: `${t('userList.mobileNo')}`, sortable: true, filter: true },
    { field: 'shortName', header: `${t('userList.shortName')}`, sortable: true, filter: true },
    {
      field: 'edit',
      header: '',
      icon: <EditIcon style={{ cursor: 'pointer', textAlign: 'center' }} />,
      onClick: handleClickEdit
    },
    {
      field: 'delete',
      header: '',
      icon: <ArrowCircleRightOutlinedIcon style={{ cursor: 'pointer', textAlign: 'center' }} />,
      onClick: handleClickConfirm
    }
  ];
  const headCellsType = ['NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'ICON', 'ICON'];
  const numericFields = ['id', 'userName', 'mobileNo', 'shortName'];

  const { TEXT_FIELD, AUTOCOMPLETE } = COMPONENTS;
  const FILTER_COMPONETS = [
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'country',
      label: 'serviceDashboard.country',
      placeholder: 'serviceDashboard.country',
      options: masterData?.country
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'region',
      label: 'Region',
      placeholder: 'Region',
      options: masterData?.office
    },
    {
      control: TEXT_FIELD,
      key: 'name',
      label: `${t('userList.name')}`,
      placeholder: `${t('userList.name')}`
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'userName',
      label: `${t('userList.userName')}`,
      placeholder: `${t('userList.userName')}`
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'email',
      label: `${t('userList.email')}`,
      placeholder: `${t('userList.email')}`
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'shortName',
      label: `${t('userList.shortName')}`,
      placeholder: `${t('userList.shortName')}`
    }
  ];
  const getFilterData = (data) => {
    console.log('Filtered data: ', data);
  };
  const getFilterDataPayloadChange = (key, val) => {
    console.log(key, val);
    if (key === 'country') {
      const country = SEVICE_DASHBOARD_FILTER_MASTER_DATA.OFFICE.find((office) => office.country === val);
      if (country) {
        dispatch({ type: POST_OFFICE, data: country.offices });
      }
    }
  };

  return (
    <Grid className="user_list_main_cls">
      {confirmUser &&
        AlertDialog({
          title: 'Confirm',
          description: 'Confirm login as',
          isOpen: confirmUser,
          handleClose: handleAlertDialogClose,
          handleSubmit: handleAlertDialogSubmit,
          negativeText: 'No',
          positiveText: 'Yes'
        })}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="User Management"
            TabIndicatorProps={{
              style: {
                display: 'none'
              }
            }}
          >
            <Tab
              label={
                <Button style={{ backgroundColor: '#94b1bf', boxShadow: 'none' }} fullWidth variant="contained">
                  {`${t('userList.internalUser')}`}
                </Button>
              }
              {...userListTabProps(0)}
            />
            <Tab
              disabled
              label={
                <Button
                  disabled
                  style={{ backgroundColor: '#94b1bf', boxShadow: 'none' }}
                  fullWidth
                  variant="contained"
                >
                  {`${t('userList.externalUser')}`}
                </Button>
              }
              {...userListTabProps()}
            />
          </Tabs>
        </Grid>
      </Grid>

      <TabPanel style={{ width: '100%' }} value={value} index={0}>
        <Grid style={{ marginTop: 0 }} container spacing={3}>
          <Grid style={{ display: 'flex', justifyContent: 'flex-end' }} item xs={7}>
            <Typography variant="h6" display="inline">
              {`${t('userList.internalUser')}`}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" style={{ float: 'right', boxShadow: 'none' }}>
              {`${t('userList.addUser')}`}
            </Button>
          </Grid>
          <Grid item xs={12}>
            {/* Filter Section */}
            <Filters
              components={FILTER_COMPONETS}
              apiUrl="dummyUrl"
              getFilterData={getFilterData}
              getFilterDataPayloadChange={getFilterDataPayloadChange}
            />
          </Grid>
        </Grid>

        {/* Grid layout for Internal users */}
        <Grid style={{ marginTop: '1rem' }} item xs={12}>
          <SimpleTable
            rowData={internalUserData}
            headerData={columnForInternalUser}
            paginator
            rows={10}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            dataKey="id"
            editMode="row"
            numericFields={numericFields}
            headCellsType={headCellsType}
          />
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid style={{ marginTop: 0 }} container spacing={3}>
          <Grid style={{ display: 'flex', justifyContent: 'flex-end' }} item xs={7}>
            <Typography variant="h6" display="inline">
              {`${t('userList.externalUser')}`}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" style={{ float: 'right' }}>
              {`${t('userList.addUser')}`}
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
    </Grid>
  );
}

export default UserList;
