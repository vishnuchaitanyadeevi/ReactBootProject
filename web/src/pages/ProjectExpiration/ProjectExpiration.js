import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, TextField, Button, Divider, Checkbox, FormControlLabel, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import SimpleTable from '../../components/table/simpleTable';
import ProjectExpirationData from './ProjectExpirationData.json';
import './ProjectExpiration.scss';

function ProjectExpiration() {
  const { t } = useTranslation();
  const [tableData, setTableData] = useState(ProjectExpirationData);
  const [editingRows, setEditingRows] = useState({});
  const onRowEditChange = (e) => {
    setEditingRows(e.data);
  };

  const setActiveRowIndex = (index) => {
    const editingRow = { ...editingRows, ...{ [`${tableData[index].id}`]: true } };
    setEditingRows(editingRow);
  };
  const columnDataForProjects = [
    {
      field: 'projectNo',
      header: 'Project number',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'customer',
      header: 'Customer',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'location',
      header: 'Location',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'expiry',
      header: 'Expiry',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'status',
      header: 'Status',
      editorElement: null,
      style: { width: '15%' },
      sortable: true,
      filter: true
    }
  ];
  const country = [
    { label: 'Saudi Arabia', value: 'Saudi Arabia' },
    { label: 'Qatar', value: 'Qatar' },
    { label: 'Oman', value: 'Oman' },
    { label: 'Kuwait', value: 'Kuwait' },
    { label: 'Iraq', value: 'Iraq' },
    { label: 'Bahrain', value: 'Bahrain' }
  ];
  return (
    <div className="project_expiration_main_cls">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4">{t('ProjectExpiration.ProjectExpirationList')}</Typography>
          <Divider style={{ backgroundColor: '#c7d2fe' }} />
          <Grid container spacing={3} style={{ marginTop: '1rem' }}>
            <Grid item xs={12} sm={3}>
              <AutocompleteWidget options={country} label="Country" disablePortal autoSelect size="small" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <AutocompleteWidget options={country} label="Region" disablePortal autoSelect size="small" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <AutocompleteWidget options={country} label="Business" disablePortal autoSelect size="small" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <AutocompleteWidget options={country} label="Status" disablePortal autoSelect size="small" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <AutocompleteWidget
                options={country}
                label="Expiration date offset"
                disablePortal
                autoSelect
                size="small"
              />
              <FormControlLabel control={<Checkbox />} label="Show expired projects" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button variant="contained" size="small" startIcon={<SearchIcon />}>
                Filter
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4">{t('ProjectExpiration.ExpirationOverview')}</Typography>
          <Divider style={{ backgroundColor: '#c7d2fe' }} />
          {/* Expire project grid */}
          <Grid container spacing={3} style={{ marginTop: '1rem' }}>
            <Grid item xs={12} sm={12}>
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid #c7d2fe',
                  borderRadius: '5px',
                  padding: '5px'
                }}
              >
                <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                  {t('ProjectExpiration.ExpiredProjects')}
                </Typography>
                <Chip label="81450" style={{ backgroundColor: '#637381', color: '#FFF' }} />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Grid
                style={{
                  border: '1px solid #c7d2fe',
                  overflow: 'scroll',
                  height: '200px',
                  borderRadius: '5px',
                  padding: '0px 5px 5px 5px',
                  alignItems: 'center'
                }}
                item
                xs={12}
                sm={12}
              >
                {[...Array(15)].map((g) => (
                  <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">
                      17-12-2015 <span style={{ fontWeight: 'bold' }}>(15)</span>
                    </Typography>
                    <Chip label="103" style={{ backgroundColor: '#637381', color: '#FFF' }} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Project expiration tabular layout */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12}>
          <SimpleTable
            rowData={ProjectExpirationData}
            headerData={columnDataForProjects}
            paginator
            rowsPerPageOptions={[10, 20, 50, 100]}
            rows={10}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            editingRows={editingRows}
            dataKey="id"
            editMode="row"
            showActionColumn
            type="text"
            title="View project"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectExpiration;
