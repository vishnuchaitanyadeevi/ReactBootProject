import React, { useState } from 'react';
import { Grid, Typography, Button, Divider, Tabs, Tab, Box } from '@mui/material';
import SimpleTable from '../../../components/table/simpleTable';
import { InternalUserTableData } from './Data';
import Filters from '../../../components/Filter/filter';
import { COMPONENTS } from '../../../utils/constants';
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function UserList() {
  const [value, setValue] = useState(0);
  const [internalUserData, setInternalUserData] = useState(InternalUserTableData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columnForInternalUser = [
    { field: 'id', header: 'ID', sortable: true, filter: true },
    { field: 'name', header: 'Name', sortable: true, filter: true },
    { field: 'userName', header: 'Username', sortable: true, filter: true },
    { field: 'email', header: 'Email', sortable: true, filter: true },
    { field: 'phone', header: 'Phone', sortable: true, filter: true },
    { field: 'displayName', header: 'Display name', sortable: true, filter: true },
    { field: 'shortName', header: 'Short name', sortable: true, filter: true }
  ];
  const headCellsType = ['NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'TEXTFIELD', 'NONE'];
  const numericFields = ['id', 'userName', 'phone', 'shortName'];

  const { TEXT_FIELD, AUTOCOMPLETE } = COMPONENTS;
  const FILTER_COMPONETS = [
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'userName',
      label: 'User Name',
      placeholder: 'User Name'
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'email',
      label: 'Email',
      placeholder: 'Email'
    }
  ];
  const getFilterData = (data) => {
    console.log('Filtered data: ', data);
  };
  const getFilterDataPayloadChange = (key, val) => {
    console.log(key, val);
  };

  return (
    <Grid className="user_list_main_cls">
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
                  Internal User
                </Button>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <Button style={{ backgroundColor: '#94b1bf', boxShadow: 'none' }} fullWidth variant="contained">
                  External User
                </Button>
              }
              {...a11yProps()}
            />
          </Tabs>
        </Grid>
      </Grid>

      <TabPanel style={{ width: '100%' }} value={value} index={0}>
        <Grid style={{ marginTop: 0 }} container spacing={3}>
          <Grid style={{ display: 'flex', justifyContent: 'flex-end' }} item xs={7}>
            <Typography variant="h6" display="inline">
              Internal Users
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" style={{ float: 'right', boxShadow: 'none' }}>
              Add User
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
            rowsPerPageOptions={[10, 20, 50, 100]}
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
            editOption
          />
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid style={{ marginTop: 0 }} container spacing={3}>
          <Grid style={{ display: 'flex', justifyContent: 'flex-end' }} item xs={7}>
            <Typography variant="h6" display="inline">
              External Users
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" style={{ float: 'right' }}>
              Add User
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
    </Grid>
  );
}

export default UserList;
