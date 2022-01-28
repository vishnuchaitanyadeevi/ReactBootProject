import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Divider, Button } from '@mui/material';
import SimpleTable from '../../../components/table/simpleTable';
import { getCountryListData } from './CountryListService';
import './countrylist.scss';

function CountryList() {
  const { t } = useTranslation();
  const [tableData, setTableData] = useState(null);
  const [editingRows, setEditingRows] = useState({});
  const headCellsType = ['NONE', 'NONE'];
  useEffect(() => {
    getCountryListData().then((data) => setTableData(data));
  }, []);
  const numericfields = ['name', 'currency'];

  const countryheaders = [
    {
      field: 'name',
      header: 'Country Name',
      editorElement: null,
      sortable: true,
      filter: true
    },
    {
      field: 'currency',
      header: 'Currency',
      editorElement: null,
      sortable: true,
      filter: true
    }
  ];

  return (
    <Grid className="countryListMainCls">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {t('CountryList.CountryList')}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained">{t('CountryList.AddNewCountry')}</Button>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ backgroundColor: '#c7d2fe' }} />
        </Grid>
        <Grid item xs={12}>
          <SimpleTable
            rowData={tableData}
            headerData={countryheaders}
            rows={10}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            editingRows={editingRows}
            dataKey="id"
            editMode="row"
            headCellsType={headCellsType}
            numericFields={numericfields}
            isglobalfilter={false}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CountryList;
