import {
  Grid,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Button
} from '@mui/material';
import React, { useState, useCallback, useEffect } from 'react';
import { ArrowRight, UploadFileOutlined } from '@mui/icons-material/';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import ProjectTable from '../../components/contracts/projectTable';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import UploadFile from '../../components/UploadFile';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import './ContractsCreation.scss';
import SimpleTable from '../../components/table/simpleTable';
import jsonData from '../../utils/project-table-data.json';

export default function ContractsCreation() {
  const countryArr = ['SA'];
  const customerArr = [11, 12, 414352, 5344, 2343];
  const statusArr = ['Active', 'On-Hold', 'Inactive'];
  const rolesArr = ['Primary', 'Role 1', 'Role 2 ', 'Role 3'];
  const transactionCurrencyArr = ['Riyal', 'Dollar'];
  const fundingTypeArr = ['Customer', 'Third Party'];
  const salesmanArr = ['Abdul Razak', 'Abdul Miyan', 'Shehnaz Kureshi'];
  const regionArr = ['Region 1', 'Region 2'];
  const [multipleImages, setMultipleImages] = useState({ images: [] });
  const [axDefaultexpanded, setAxDefaultexpanded] = useState(true);
  // const [tableData, setTableData] = useState({});
  let tableData = [];
  const handleChange = (panel) => (event, isExpanded) => {
    setAxDefaultexpanded(isExpanded ? panel : false);
  };
  const handleDropMultiple = useCallback((acceptedFiles) => {
    setMultipleImages({
      ...multipleImages,
      images: acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  });

  const navigate = useNavigate();

  const navigateToContractlist = () => {
    navigate('/contractsList', { replace: true });
  };

  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  const isEditFlag = match('contract/edit/1');
  useEffect(() => {
    console.log(isEditFlag);
  }, [isEditFlag]);

  // handle remove selcted file
  const handleRemove = (file) => {
    const filteredItems = multipleImages.images.filter((_file) => _file !== file);
    setMultipleImages({ ...multipleImages, images: filteredItems });
  };

  const columnDataForProjects = [
    { field: 'status', header: 'Status', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'prjno', header: 'prjno', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'prjnm', header: 'prjnm', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'lcnm', header: 'lcnm', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'bspct', header: 'bspct', editorElement: null, style: { width: '15%' }, sortable: true, filter: true },
    { field: 'sdt', header: 'sdt', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'edt', header: 'edt', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'extp', header: 'extp', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'grpd', header: 'grpd', editorElement: null, style: { width: '5%' }, sortable: true, filter: true },
    { field: 'prm', header: 'prm', editorElement: 'checkbox', style: { width: '5%' }, sortable: true, filter: true }
  ];

  if (!isEditFlag) {
    console.log('add contract', isEditFlag);
    tableData = [];
    return (
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} lg={12} display="flex" justifyContent="center">
          <Typography variant="h4">Add Contract</Typography>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
          <Typography variant="h4">Customer Details</Typography>
          <Grid container spacing={1} item xs={12} xl={6}>
            <Grid item xs={12} xl={6} md={6}>
              <AutocompleteWidget options={countryArr} size="small" label="Country" disablePortal autoSelect />
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <AutocompleteWidget options={regionArr} size="small" label="Region" disablePortal autoSelect />
            </Grid>
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget options={customerArr} size="small" label="Customer No" disablePortal autoSelect />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Customer Name" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Customer Address" size="small" />
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <TextField fullWidth label="CR No." size="small" />
          </Grid>
          <Grid item xs={12} xl={6} md={6} />
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget options={salesmanArr} size="small" label="Salesman" disablePortal autoSelect />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
          <Typography variant="h4">Contract Details</Typography>
          <Grid container spacing={1} item xs={12} xl={6}>
            <Grid item xs={12} xl={6} md={6}>
              <TextField fullWidth label="Contract No." size="small" />
            </Grid>
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Contract Name" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <BasicDatePicker label="Contract Signed On" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <BasicDatePicker label="Contract Start Date" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField label="General Discount" type="number" size="small" /> %
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget options={statusArr} size="small" label="Status" defaultValue="Active" />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
          <Typography variant="h4">Signatory Information</Typography>
          <Grid item xs={12} xl={6} md={6} />
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget options={rolesArr} size="small" label="Role" defaultValue="Primary" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Name" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Position" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Address" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Phone No." size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Fax No." size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Mobile No." size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Email ID" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Note" size="small" />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
          <Typography variant="h4">Additional Information</Typography>
          <Grid item xs={12} xl={12} md={12}>
            <TextField multiline minRows={3} fullWidth label="Special Attention / Notes" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField multiline minRows={3} fullWidth label="Scope of Contract" size="small" />
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <UploadFile
              showPreview
              maxSize={3145728}
              accept="application/pdf"
              files={multipleImages.images}
              onDrop={handleDropMultiple}
              onRemove={handleRemove}
              backgroundColor="green"
              buttonLabel="Upload Contract"
              startIcon={<UploadFileOutlined />}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={12}>
          <Accordion
            fullWidth
            expanded={axDefaultexpanded === 'panel1' || axDefaultexpanded === true}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary expandIcon={<ArrowRight />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h4">AX Default Fields</Typography>
            </AccordionSummary>
            <AccordionDetails
              id="panel1a-content"
              hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}
            >
              <Grid container spacing={1}>
                <Grid container rowSpacing={1} columnSpacing={2} item xs={12} xl={6} md={6}>
                  <Grid item xs={12} xl={12} md={12}>
                    <TextField fullWidth label="Legal Entity" size="small" />
                  </Grid>
                  <Grid item xs={12} xl={12} md={12}>
                    <TextField fullWidth label="Account currency" size="small" />
                  </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={2} item xs={12} xl={6} md={6}>
                  <Grid item xs={12} xl={12} md={12}>
                    <AutocompleteWidget options={transactionCurrencyArr} size="small" label="Transaction Currency" />
                  </Grid>
                  <Grid item xs={12} xl={12} md={12}>
                    <AutocompleteWidget
                      options={fundingTypeArr}
                      size="small"
                      label="Fund Type"
                      defaultValue="Customer"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Grid item xs={12} xl={4} md={4} hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}>
            <Accordion fullWidth>
              <AccordionSummary expandIcon={<ArrowRight />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography variant="h4">Financial Dimensions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> Lorem ipsum. </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
          <Stack direction="row" spacing={2}>
            <Button color="secondary" variant="contained" onClick={navigateToContractlist}>
              Back
            </Button>
            <Button variant="contained">Save</Button>
            <Button color="warning" variant="contained">
              Complete Contract
            </Button>
          </Stack>
        </Grid>
        <Grid rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
          <ProjectTable
            tableDataInput={tableData}
            columnDataForProjects={columnDataForProjects}
            editMode="row"
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            rows={10}
            dataKey="id"
            paginator
            filterDisplay="row"
            reorderableColumns
          />
        </Grid>
      </Grid>
    );
  }
  if (isEditFlag) {
    const formData = {
      country: 'SA',
      region: 'Region 1',
      customerNo: '11',
      customerAddress: 'Reza heights',
      crNo: '123',
      salesman: 'Abdul Razak',
      contactNo: '86685632054',
      customerName: 'Reza Customer'
    };
    tableData = jsonData;
    return (
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} lg={12} display="flex" justifyContent="center">
          <Typography variant="h4">Edit Contract</Typography>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
          <Typography variant="h4">Customer Details</Typography>
          <Grid container spacing={1} item xs={12} xl={6}>
            <Grid item xs={12} xl={6} md={6}>
              <AutocompleteWidget
                defaultValue={formData.country}
                options={countryArr}
                size="small"
                label="Country"
                disablePortal
                autoSelect
              />
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <AutocompleteWidget
                defaultValue={formData.region}
                options={regionArr}
                size="small"
                label="Region"
                disablePortal
                autoSelect
              />
            </Grid>
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget
              defaultValue={formData.customerNo}
              options={customerArr}
              size="small"
              label="Customer No"
              disablePortal
              autoSelect
            />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField value={formData.customerName} fullWidth label="Customer Name" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField value={formData.customerAddress} fullWidth label="Customer Address" size="small" />
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <TextField value={formData.crNo} fullWidth label="CR No." size="small" />
          </Grid>
          <Grid item xs={12} xl={6} md={6} />
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget
              defaultValue={formData.salesman}
              options={salesmanArr}
              size="small"
              label="Salesman"
              disablePortal
              autoSelect
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
          <Typography variant="h4">Contract Details</Typography>
          <Grid container spacing={1} item xs={12} xl={6}>
            <Grid item xs={12} xl={6} md={6}>
              <TextField fullWidth label="Contract No." size="small" />
            </Grid>
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Contract Name" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <BasicDatePicker label="Contract Signed On" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <BasicDatePicker label="Contract Start Date" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField label="General Discount" type="number" size="small" /> %
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget options={statusArr} size="small" label="Status" defaultValue="Active" />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
          <Typography variant="h4">Signatory Information</Typography>
          <Grid item xs={12} xl={6} md={6} />
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget options={rolesArr} size="small" label="Role" defaultValue="Primary" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Name" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Position" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Address" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Phone No." size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Fax No." size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Mobile No." size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Email ID" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField fullWidth label="Note" size="small" />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
          <Typography variant="h4">Additional Information</Typography>
          <Grid item xs={12} xl={12} md={12}>
            <TextField multiline minRows={3} fullWidth label="Special Attention / Notes" size="small" />
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <TextField multiline minRows={3} fullWidth label="Scope of Contract" size="small" />
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <UploadFile
              showPreview
              maxSize={3145728}
              accept="application/pdf"
              files={multipleImages.images}
              onDrop={handleDropMultiple}
              onRemove={handleRemove}
              backgroundColor="green"
              buttonLabel="Upload Contract"
              startIcon={<UploadFileOutlined />}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={12}>
          <Accordion
            fullWidth
            expanded={axDefaultexpanded === 'panel1' || axDefaultexpanded === true}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary expandIcon={<ArrowRight />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h4">AX Default Fields</Typography>
            </AccordionSummary>
            <AccordionDetails
              id="panel1a-content"
              hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}
            >
              <Grid container spacing={1}>
                <Grid container rowSpacing={1} columnSpacing={2} item xs={12} xl={6} md={6}>
                  <Grid item xs={12} xl={12} md={12}>
                    <TextField fullWidth label="Legal Entity" size="small" />
                  </Grid>
                  <Grid item xs={12} xl={12} md={12}>
                    <TextField fullWidth label="Account currency" size="small" />
                  </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={2} item xs={12} xl={6} md={6}>
                  <Grid item xs={12} xl={12} md={12}>
                    <AutocompleteWidget options={transactionCurrencyArr} size="small" label="Transaction Currency" />
                  </Grid>
                  <Grid item xs={12} xl={12} md={12}>
                    <AutocompleteWidget
                      options={fundingTypeArr}
                      size="small"
                      label="Fund Type"
                      defaultValue="Customer"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Grid item xs={12} xl={4} md={4} hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}>
            <Accordion fullWidth>
              <AccordionSummary expandIcon={<ArrowRight />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography variant="h4">Financial Dimensions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> Lorem ipsum. </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
          <Stack direction="row" spacing={2}>
            <Button color="secondary" variant="contained" onClick={navigateToContractlist}>
              Back
            </Button>
            <Button variant="contained">Save</Button>
            <Button color="warning" variant="contained">
              Complete Contract
            </Button>
          </Stack>
        </Grid>
        <Grid rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
          <ProjectTable
            tableDataInput={tableData}
            columnDataForProjects={columnDataForProjects}
            editMode="row"
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            rows={10}
            dataKey="id"
            paginator
            filterDisplay="row"
            reorderableColumns
          />
        </Grid>
      </Grid>
    );
  }
}
