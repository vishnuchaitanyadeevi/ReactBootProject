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
import { FormikProvider, Form, useFormik } from 'formik';
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
import ContractJson from '../../utils/Contract-List-Data.json';

export default function ContractsCreation() {
  const formik = useFormik({
    // initialValues,
    // onSubmit,
    // validate
  });

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
  const [axDefaultexpanded, setAxDefaultexpanded] = useState(true);

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

  const [defaultSalesman, setdefaultSalesman] = useState('Abdul Miyan');
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
  const { state } = useLocation();
  const paramId = state;
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  const isEditFlag = match('contract/edit/:id');

  useEffect(() => {
    if (isEditFlag) {
      console.log('paramId', paramId);
      const popData = ContractJson.find((item) => item.contractNumber === paramId);
      console.log('log', popData);
      updateFormFields(popData);
    } else {
      setContractData({
        ...contractData,
        contractNo: '',
        contractSignOn: '',
        contractStartDate: ''
      });
    }
  }, [isEditFlag]);

  const updateFormFields = (popData) => {
    console.log('PopData', popData);
    setContractData({
      ...contractData,
      region: popData?.region,
      contractName: popData?.contractName,
      country: popData?.country,
      contractNo: popData?.contractNumber,
      contractSignOn: popData?.contractSignOn,
      contractStartDate: popData?.contractStartDate,
      customerNo: popData?.customerNumber,
      // customerName: popData?.customerName,
      // customerAddress: popData?.customerAddress,
      salesman: popData?.salesman,
      name: popData?.signName,
      position: popData?.signPos,
      address: popData?.signAdd,
      phoneNo: popData?.phoneNo,
      faxNo: popData?.faxNo,
      mobileNo: popData?.mobileNo,
      emailId: popData?.emailId,
      note: popData?.note,
      specialAttention: popData?.specialAttention,
      scopeOfContract: popData?.scopeOfContract,
      legalEntity: popData?.legalEntity,
      transactionCurrency: popData?.transactionCurrency,
      accountCurrency: popData?.accountCurrency,
      fundingType: popData?.fundingType,
      generalDiscount: popData?.generalDiscount,
      crNo: popData?.crNo
    });
  };

  console.log('contractData', contractData);
  useEffect(() => {
    if (customerNo) {
      console.log('calling... only customerNo no', customerNo);
      const newData = CustomerData.find((item) => item.custno === customerNo);
      console.log('new_data....', newData.address);
      setContractData({ ...contractData, customerName: newData.name, customerAddress: newData.address });
    } /* else {
      setContractData({ ...contractData, customerName: '', customerAddress: '' });
    } */
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
  tableData = isEditFlag ? jsonData : [];
  const numericFields = ['status', 'prjno', 'sdt', 'edt', 'extp', 'grpd', 'prm'];
  return (
    <Grid container spacing={2} padding={3}>
      <FormikProvider>
        <Form>
          <Grid item xs={12} lg={12} display="flex" justifyContent="center">
            <Typography variant="h4">{isEditFlag ? `Edit Contract - ${paramId}` : 'Add Contract'}</Typography>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
            <Typography variant="h6">Customer Details</Typography>
            <Grid container spacing={1} item xs={12} xl={6}>
              <Grid item xs={12} xl={6} md={6}>
                <AutocompleteWidget
                  options={countryArr}
                  size="small"
                  label="Country"
                  disablePortal
                  autoSelect
                  value={country}
                />
              </Grid>
              <Grid item xs={12} xl={6} md={6}>
                <AutocompleteWidget
                  options={regionArr}
                  size="small"
                  label="Region"
                  disablePortal
                  autoSelect
                  value={region}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <AutocompleteWidget
                options={customerArr}
                size="small"
                label="Customer No"
                disablePortal
                autoSelect
                // onChange={(event, value) => setContractData({ ...contractData, customerNo: value })}
                value={customerNo}
              />
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <IconButton aria-label="SearchIcon" size="small" color="primary" onClick={() => handleOpen()}>
                <SearchIcon />
              </IconButton>
              {open && <CustomersList openFlag={open} handleCloseDialog={(param) => setOpen(param)} />}
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <TextField fullWidth label="Customer Name" size="small" value={customerNo ? customerName : ''} />
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <TextField fullWidth label="Customer Address" size="small" value={customerNo ? customerAddress : ''} />
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <TextField fullWidth label="CR No." size="small" value={crNo} />
            </Grid>
            <Grid item xs={12} xl={6} md={6} />
            <Grid item xs={12} xl={6} md={6}>
              <AutocompleteWidget
                options={salesmanArr}
                value={isEditFlag === true ? salesman : defaultSalesman}
                size="small"
                label="Salesman"
                disablePortal
                autoSelect
              />
            </Grid>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
            <Typography variant="h6">Contract Details</Typography>
            <Grid container spacing={1} item xs={12} xl={6}>
              <Grid item xs={12} xl={6} md={6}>
                <TextField fullWidth label="Contract No." size="small" value={contractNo} />
              </Grid>
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <TextField fullWidth label="Contract Name" size="small" value={contractName} />
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <BasicDatePicker
                label="Contract Signed On"
                inputFormat="dd-MM-yyyy"
                views={['year', 'month', 'day']}
                passVal={isEditFlag ? contractSignOn : new Date()}
              />
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <BasicDatePicker
                label="Contract Start Date"
                inputFormat="dd-MM-yyyy"
                views={['year', 'month', 'day']}
                passVal={isEditFlag ? contractStartDate : new Date()}
              />
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <TextField label="General Discount" type="number" size="small" value={generalDiscount} /> %
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <AutocompleteWidget options={statusArr} size="small" label="Status" defaultValue="Active" />
            </Grid>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
            <Typography variant="h6">Signatory Information</Typography>
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
            <Typography variant="h6">Additional Information</Typography>
            <Grid item xs={12} xl={12} md={12}>
              <TextField
                multiline
                minRows={3}
                fullWidth
                label="Special Attention / Notes"
                size="small"
                value={specialAttention}
              />
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <TextField
                multiline
                minRows={3}
                fullWidth
                label="Scope of Contract"
                size="small"
                value={scopeOfContract}
              />
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
                buttonLabel="Upload Contract (PDF)"
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
                <Typography variant="h6">AX Default Fields</Typography>
              </AccordionSummary>
              <AccordionDetails
                id="panel1a-content"
                hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}
              >
                <Grid container spacing={1}>
                  <Grid container rowSpacing={1} columnSpacing={2} item xs={12} xl={6} md={6}>
                    <Grid item xs={12} xl={12} md={12}>
                      <TextField fullWidth label="Legal Entity" size="small" value={legalEntity} />
                    </Grid>
                    <Grid item xs={12} xl={12} md={12}>
                      <TextField fullWidth label="Account currency" size="small" value={accountCurrency} />
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={1} columnSpacing={2} item xs={12} xl={6} md={6}>
                    <Grid item xs={12} xl={12} md={12}>
                      <AutocompleteWidget
                        options={transactionCurrencyArr}
                        size="small"
                        label="Transaction Currency"
                        value={transactionCurrency}
                      />
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
              <Accordion
                fullWidth
                expanded={axDefaultexpanded === 'panel1' || axDefaultexpanded === true}
                hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}
              >
                <AccordionSummary expandIcon={<ArrowRight />} aria-controls="panel2a-content" id="panel2a-header">
                  <Typography variant="h6">Financial Dimensions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography> Lorem ipsum. </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
            <Stack direction="row" spacing={2}>
              <Button color="secondary" variant="contained" onClick={() => navigateToContractlist()}>
                Back
              </Button>
              <Button variant="contained" onClick={() => handleClickSaveContract()}>
                Save
              </Button>
              <Button color="warning" variant="contained">
                Complete Contract
              </Button>
              {isEditFlag && (
                <Button color="primary" variant="contained">
                  AX Integration
                </Button>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" size="small" onClick={() => addNewProject()}>
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
        </Form>
      </FormikProvider>
    </Grid>
  );
}
