import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import contractData from '../../utils/Contract-List-Data.json';
import '../../Styles/app.scss';
import './ContractList.scss';

function ContractList() {
  const [tableData, setTableData] = useState(contractData);

  const [contracts, setContracts] = useState(contractData);
  const [expandedRows, setExpandedRows] = useState(null);

  const rowExpansionTemplate = (data) => (
    <div className="orders-subtable">
      <h5>Orders for {data.name}</h5>
      <DataTable value={data.projects} responsiveLayout="scroll">
        <Column field="id" header="Id" sortable />
        <Column field="status" header="status" sortable />
        <Column field="project_number" header="Project Number" sortable />
        <Column field="project_start_date" header="Project Start Date" sortable />
        <Column field="end_date" header="End Date" sortable />
        <Column field="business" header="Business" sortable />
        <Column field="location" header="Location" sortable />
      </DataTable>
    </div>
  );
  return (
    <Grid className="contract_list_main_cls">
      <Grid container spacing={3}>
        {/* Grid for heading section */}
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Contract List
          </Typography>
        </Grid>

        {/* Grid for open project and add contract section */}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid style={{ display: 'flex', alignItems: 'center' }}>
            <TextField label="Project Number" size="small" />
            <Button variant="contained" color="primary" style={{ marginLeft: '1rem' }} size="small">
              Open Project
            </Button>
          </Grid>
          <Button variant="contained" color="primary" size="small">
            Add New Contract
          </Button>
        </Grid>

        {/* Grid for filter section */}
        {/* Grid for all contract list */}
        <Grid item xs={12}>
          <div className="datatable-rowexpansion-demo">
            <div className="card">
              <DataTable
                value={contracts}
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                // onRowExpand={onRowExpand}
                // onRowCollapse={onRowCollapse}
                responsiveLayout="scroll"
                rowExpansionTemplate={rowExpansionTemplate}
                dataKey="id"
              >
                <Column expander style={{ width: '3em' }} />
                <Column field="id" header="ID" sortable />
                <Column header="status" field="status" />
                <Column field="contract_number" header="Contract Number" sortable />
                <Column field="contract_sign_on" header="Contract Sign On" sortable />
                <Column field="contract_start_date" header="Contract Start Date" sortable />
                <Column field="customer" header="customer" sortable />
                <Column field="salesman" header="salesman" sortable />
              </DataTable>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContractList;
