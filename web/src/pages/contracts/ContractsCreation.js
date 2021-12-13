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
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import ProjectTable from '../../components/contracts/projectTable';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import UploadFile from '../../components/UploadFile';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import './ContractsCreation.scss';
import SimpleTable from '../../components/table/simpleTable';
import jsonData from '../../utils/project-table-data.json';
import CustomerData from '../../utils/customerslist.json';
import CustomersList from '../../components/CustomersList';
import { isEmail, isPhone } from '../../utils/utils';

export default function ContractsCreation() {
  const [open, setOpen] = useState(false);
  const [editingRows, setEditingRows] = useState({});
  const countryArr = ['SA'];
  const customerArr = ['HSD_ABH_00002', 'HSD_ABH_00004'];
  const statusArr = ['Active', 'On-Hold', 'Inactive'];
  const rolesArr = ['Primary', 'Role 1', 'Role 2 ', 'Role 3'];
  const transactionCurrencyArr = ['Riyal', 'Dollar'];
  const fundingTypeArr = ['Customer', 'Third Party'];
  const salesmanArr = ['Abdul Razak', 'Abdul Miyan', 'Shehnaz Kureshi'];
  const regionArr = ['Region 1', 'Region 2'];
  const [multipleImages, setMultipleImages] = useState({ images: [] });
  const [axDefaultexpanded, setAxDefaultexpanded] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  // const [tableData, setTableData] = useState({});
  let tableData = [];
  const [contractData, setContractData] = useState({
    // customer details
    country: '',
    region: '',
    customerNo: '',
    customerName: '',
    customerAddress: '',
    crNo: '',
    salesman: '',
    // contract details
    contractNo: '',
    contractName: '',
    contractSignOn: '',
    contractStartDate: '',
    generalDiscount: '',
    status: '',
    // Signatory information
    role: '',
    name: '',
    position: '',
    address: '',
    phoneNo: '',
    faxNo: '',
    mobileNo: '',
    emailId: '',
    note: '',
    // Additional information
    specialAttention: '',
    scopeOfContract: '',
    uploadContractFile: '',
    // AX default fields
    legalEntity: '',
    transactionCurrency: '',
    accountCurrency: '',
    fundingType: ''
  });

  // destructing contract data object
  const {
    country,
    region,
    customerNo,
    customerName,
    customerAddress,
    crNo,
    salesman,
    contractNo,
    contractName,
    contractSignOn,
    contractStartDate,
    generalDiscount,
    status,
    role,
    name,
    position,
    address,
    phoneNo,
    faxNo,
    mobileNo,
    emailId,
    note,
    specialAttention,
    scopeOfContract,
    uploadContractFile,
    legalEntity,
    transactionCurrency,
    accountCurrency,
    fundingType
  } = contractData;

  // HandleChange contract data fuction
  const updateContractData = (key, val) => {
    setContractData({ ...contractData, [key]: val });
    console.log(key, val);
  };
  console.log('Customer Number', customerNo);
  const handleClickSaveContract = () => {
    if (!name || !position || !address || !phoneNo || !faxNo || !mobileNo || !emailId || isEmail(emailId) || !note) {
      setIsError(true);
    } else {
      setIsError(false);
      console.log('Contract data is...', contractData);
    }
  };
  const [isError, setIsError] = useState(false);
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
  const addNewProject = () => {
    navigate('/project/add', { replace: true });
  };
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  const isEditFlag = match('contract/edit/1');
  useEffect(() => {
    console.log(isEditFlag);
  }, [isEditFlag]);

  useEffect(() => {
    if (customerNo) {
      console.log('calling... only customerNo no', customerNo);
      const newData = CustomerData.find((item) => item.custno === customerNo);
      console.log('new_data....', newData.address);
      setContractData({ ...contractData, customerName: newData.name, customerAddress: newData.address });
    } else {
      setContractData({ ...contractData, customerName: '', customerAddress: '' });
    }
  }, [customerNo]);

  // handle remove selcted file
  const handleRemove = (file) => {
    const filteredItems = multipleImages.images.filter((_file) => _file !== file);
    setMultipleImages({ ...multipleImages, images: filteredItems });
  };

  const columnDataForProjects = [
    { field: 'status', header: 'Status', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    {
      field: 'prjno',
      header: 'Project No.',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'prjnm',
      header: 'Project Name',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'lcnm',
      header: 'Location Name',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'bspct',
      header: 'Business ProjCat',
      editorElement: null,
      style: { width: '15%' },
      sortable: true,
      filter: true
    },
    { field: 'sdt', header: 'Start Date', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'edt', header: 'End Date', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'extp', header: 'Ex Type', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    { field: 'grpd', header: 'Grouped', editorElement: null, style: { width: '5%' }, sortable: true, filter: true },
    { field: 'prm', header: 'Primary', editorElement: 'checkbox', style: { width: '5%' }, sortable: true, filter: true }
  ];

  console.log('add contract', isEditFlag);
  tableData = isEditFlag ? jsonData : jsonData;
  const numericFields = ['status', 'prjno', 'sdt', 'edt', 'extp', 'grpd', 'prm'];
  return (
    <Grid container spacing={2} padding={3}>
      <Grid item xs={12} lg={12} display="flex" justifyContent="center">
        <Typography variant="h4">{isEditFlag ? 'Edit Contract' : 'Add Contract'}</Typography>
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
        <Grid item xs={12} xl={6} md={6}>
          <IconButton aria-label="SearchIcon" size="small" color="primary" onClick={handleOpen}>
            <SearchIcon />
          </IconButton>
          {open && <CustomersList openFlag={open} handleCloseDialog={(param) => setOpen(param)} />}
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
          <TextField
            fullWidth
            label="Name"
            size="small"
            onChange={(e) => updateContractData('name', e.target.value)}
            value={name}
            error={isError && !name}
            helperText={isError && !name && 'Enter Name'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label="Position"
            size="small"
            onChange={(e) => updateContractData('position', e.target.value)}
            value={position}
            error={isError && !position}
            helperText={isError && !position && 'Enter Position'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label="Address"
            size="small"
            onChange={(e) => updateContractData('address', e.target.value)}
            value={address}
            error={isError && !address}
            helperText={isError && !address && 'Enter Address'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label="Phone No."
            size="small"
            onChange={(e) => updateContractData('phoneNo', e.target.value)}
            value={phoneNo}
            error={isError && !phoneNo}
            helperText={isError && !phoneNo && 'Enter Phone Number'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label="Fax No."
            size="small"
            onChange={(e) => updateContractData('faxNo', e.target.value)}
            value={faxNo}
            error={isError && !faxNo}
            helperText={isError && !faxNo && 'Enter Fax Number'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label="Mobile No."
            size="small"
            onChange={(e) => updateContractData('mobileNo', e.target.value)}
            value={mobileNo}
            error={isError && (!mobileNo || isPhone(mobileNo))}
            helperText={
              (isError && !mobileNo && 'Enter Mobile Number') ||
              (isError && isPhone(mobileNo) && 'Not Valid Mobile Number')
            }
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label="Email ID"
            size="small"
            onChange={(e) => updateContractData('emailId', e.target.value)}
            value={emailId}
            error={isError && (!emailId || isEmail(emailId))}
            helperText={
              (isError && !emailId && 'Enter Email Id') || (isError && isEmail(emailId) && 'Not Valid Email Id')
            }
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label="Note"
            size="small"
            onChange={(e) => updateContractData('note', e.target.value)}
            value={note}
            error={isError && !note}
            helperText={isError && !note && 'Enter Note'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
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
                    label="Funding Type"
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
          <Button variant="contained" onClick={handleClickSaveContract}>
            Save
          </Button>
          <Button color="warning" variant="contained">
            Complete Contract
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" size="small" onClick={addNewProject}>
          Add new project
        </Button>
      </Grid>
      <Grid rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
        <SimpleTable
          rowData={tableData}
          headerData={columnDataForProjects}
          paginator
          rowsPerPageOptions={[10, 20, 50, 100]}
          rows={10}
          showGridlines
          responsiveLayout="scroll"
          resizableColumns
          columnResizeMode="expand"
          size="small"
          // editingRows={editingRows}
          dataKey="id"
          editMode="row"
          editOption
          numericFields={numericFields}
        />
      </Grid>
    </Grid>
  );
}
