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
import { useTranslation } from 'react-i18next';
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
import { isEmail, isPhone, isName } from '../../utils/utils';
import ContractJson from '../../utils/Contract-List-Data.json';

export default function ContractsCreation() {
  const [open, setOpen] = useState(false);
  const [editingRows, setEditingRows] = useState({});
  const { t } = useTranslation();
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
  const [checkEvent, setCheckEvent] = useState(false);
  const handleClickSaveContract = () => {
    const checkFile = multipleImages.images.length;
    setCheckEvent(true);
    console.log('logs', checkEvent);
    if (
      !name ||
      !position ||
      !address ||
      !phoneNo ||
      !faxNo ||
      !mobileNo ||
      !emailId ||
      isEmail(emailId) ||
      !note ||
      !customerName ||
      !customerAddress ||
      !contractNo ||
      !contractName ||
      !crNo ||
      !country ||
      !region ||
      !customerNo ||
      !salesman ||
      !contractSignOn ||
      !contractStartDate ||
      !generalDiscount ||
      !status ||
      !scopeOfContract ||
      !legalEntity ||
      !transactionCurrency ||
      !accountCurrency ||
      !fundingType ||
      !checkFile
    ) {
      setIsError(true);
      console.log('length', checkFile);
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
      setContractData({ ...contractData, customerName: newData.name, customerAddress: newData.address });
    } /* else {
      setContractData({ ...contractData, customerName: '', customerAddress: '' });
    } */
  }, [customerNo]);

  // handle remove selcted file
  const handleRemove = (file) => {
    const filteredItems = multipleImages.images.filter((_file) => _file !== file);
    setMultipleImages({ ...multipleImages, images: filteredItems });
    // console.log('length', checkFile);
  };

  const columnDataForProjects = [
    { field: 'status', header: 'Status', editorElement: null, style: { width: '10%' }, sortable: true, filter: true },
    {
      field: 'prjno',
      header: 'Project Number',
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
      <Grid item xs={12} lg={12} display="flex" justifyContent="center">
        <Typography variant="h4">{isEditFlag ? `t('Contract') - ${paramId}` : t('Add Contract')}</Typography>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
        <Typography variant="h6">{t('Customer Details')}</Typography>
        <Grid container spacing={1} item xs={12} xl={6}>
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget
              options={countryArr}
              size="small"
              label={t('Country')}
              disablePortal
              value={country}
              error={isError && !country}
              helperText={isError && !country && 'Select Country'}
              FormHelperTextProps={{ className: 'helper_text_cls' }}
              onChange={(event, newValue) => {
                updateContractData('country', newValue);
              }}
            />
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget
              options={regionArr}
              size="small"
              label={t('Region')}
              disablePortal
              value={region}
              error={isError && !region}
              helperText={isError && !region && 'Select Region'}
              FormHelperTextProps={{ className: 'helper_text_cls' }}
              onChange={(event, newValue) => {
                updateContractData('region', newValue);
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <AutocompleteWidget
            options={customerArr}
            size="small"
            label={t('Customer No')}
            disablePortal
            // onChange={(event, value) => setContractData({ ...contractData, customerNo: value })}
            value={customerNo}
            error={isError && !customerNo}
            helperText={isError && !customerNo && 'Enter Customer Number'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(event, newValue) => {
              updateContractData('customerNo', newValue);
            }}
          />
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <IconButton aria-label="SearchIcon" size="small" color="primary" onClick={() => handleOpen()}>
            <SearchIcon />
          </IconButton>
          {open && <CustomersList openFlag={open} handleCloseDialog={(param) => setOpen(param)} />}
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label={t('Customer Name')}
            size="small"
            value={customerName}
            error={isError && !customerName}
            helperText={isError && !customerName && 'Enter Customer Name'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(e) => updateContractData('customerName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label={t('Customer Address')}
            size="small"
            value={customerAddress}
            error={isError && !customerAddress}
            helperText={isError && !customerAddress && 'Enter Customer Address'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(e) => updateContractData('customerAddress', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <TextField
            fullWidth
            label={t('CR Number')}
            size="small"
            value={crNo}
            error={isError && !crNo}
            helperText={isError && !crNo && 'Enter CR Number'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(e) => updateContractData('crNo', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={6} md={6} />
        <Grid item xs={12} xl={6} md={6}>
          <AutocompleteWidget
            options={salesmanArr}
            value={salesman}
            defaultValue={defaultSalesman}
            size="small"
            label={t('Salesman')}
            disablePortal
            onChange={(event, newValue) => {
              updateContractData('salesman', newValue);
            }}
            error={isError && !salesman}
            helperText={isError && !salesman && 'Select Salesman'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
        <Typography variant="h6">{t('Contract Details')}</Typography>
        <Grid container spacing={1} item xs={12} xl={6}>
          <Grid item xs={12} xl={6} md={6}>
            <TextField
              fullWidth
              label={t('Contract Number')}
              size="small"
              value={contractNo}
              error={isError && !contractNo}
              helperText={isError && !contractNo && 'Enter Contract Number'}
              FormHelperTextProps={{ className: 'helper_text_cls' }}
              onChange={(e) => updateContractData('contractNo', e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label={t('Contract Name')}
            size="small"
            value={contractName}
            error={isError && !contractName}
            helperText={isError && !contractName && 'Enter Contract Name'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(e) => updateContractData('contractName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <BasicDatePicker
            label={t('Contract Signed On')}
            inputFormat="dd-MM-yyyy"
            views={['year', 'month', 'day']}
            // value={isEditFlag ? contractSignOn : new Date()}
            value={contractSignOn}
            error={isError && !contractSignOn}
            helperText={isError && !contractSignOn && 'Enter Sign-On Date'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(newValue) => updateContractData('contractSignOn', newValue)}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <BasicDatePicker
            label={t('Contract Start Date')}
            inputFormat="dd-MM-yyyy"
            views={['year', 'month', 'day']}
            // value={isEditFlag ? contractStartDate : new Date()}
            value={contractStartDate}
            error={isError && (!contractStartDate || contractStartDate < contractSignOn)}
            helperText={
              (isError && !contractStartDate && 'Enter Start Date') ||
              (isError && contractStartDate < contractSignOn && 'Start Date can not be before Sign-On Date')
            }
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            minDate={contractSignOn}
            onChange={(newValue) => updateContractData('contractStartDate', newValue)}
            disabled={!contractSignOn}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            label={t('General Discount')}
            type="number"
            size="small"
            value={generalDiscount}
            error={isError && !generalDiscount}
            helperText={isError && !generalDiscount && 'Enter General Discount'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(e) => updateContractData('generalDiscount', e.target.value)}
          />
          %
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <AutocompleteWidget
            options={statusArr}
            size="small"
            label={t('Status')}
            defaultValue="Active"
            value={status}
            error={isError && !status}
            helperText={isError && !status && 'Select Status'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(event, newValue) => {
              updateContractData('status', newValue);
            }}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={6}>
        <Typography variant="h6">{t('Signatory Information')}</Typography>
        <Grid item xs={12} xl={6} md={6} />
        <Grid item xs={12} xl={6} md={6}>
          <AutocompleteWidget
            options={rolesArr}
            size="small"
            label={t('Role')}
            defaultValue="Primary"
            error={isError && !role}
            value={role}
            helperText={isError && !role && 'Select Role'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(event, newValue) => {
              updateContractData('role', newValue);
            }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label={t('Name')}
            size="small"
            onChange={(e) => updateContractData('name', e.target.value)}
            value={name}
            error={isError && (!name || isName(name))}
            helperText={(isError && !name && 'Enter Name') || (isError && isName(name) && 'Not Valid Name')}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label={t('Position')}
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
            label={t('Address')}
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
            label={t('Phone Number')}
            size="small"
            onChange={(e) => updateContractData('phoneNo', e.target.value)}
            value={phoneNo}
            error={isError && (!phoneNo || isPhone(phoneNo))}
            helperText={
              (isError && !phoneNo && 'Enter Phone Number') || (isError && isPhone(phoneNo) && 'Not Valid Phone Number')
            }
            FormHelperTextProps={{ className: 'helper_text_cls' }}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            fullWidth
            label={t('Fax Number')}
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
            label={t('Mobile Number')}
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
            label={t('Email ID')}
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
            label={t('Note')}
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
        <Typography variant="h6">{t('Additional Information')}</Typography>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            multiline
            minRows={3}
            fullWidth
            label={t('Special Attention / Notes')}
            size="small"
            value={specialAttention}
            onChange={(e) => updateContractData('specialAttention', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={12}>
          <TextField
            multiline
            minRows={3}
            fullWidth
            label={t('Scope of Contract')}
            size="small"
            value={scopeOfContract}
            error={isError && !scopeOfContract}
            helperText={isError && !scopeOfContract && 'Enter Scope of Contract'}
            FormHelperTextProps={{ className: 'helper_text_cls' }}
            onChange={(e) => updateContractData('scopeOfContract', e.target.value)}
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
            buttonLabel={t('Upload Contract (PDF)')}
            startIcon={<UploadFileOutlined />}
            checkEmpty={Boolean(multipleImages.images.length)}
            eventCalled={Boolean(checkEvent)}
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
            <Typography variant="h6">{t('AX Default Fields')}</Typography>
          </AccordionSummary>
          <AccordionDetails
            id="panel1a-content"
            hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}
          >
            <Grid container spacing={1}>
              <Grid container rowSpacing={1} columnSpacing={2} item xs={12} xl={6} md={6}>
                <Grid item xs={12} xl={12} md={12}>
                  <TextField
                    fullWidth
                    label={t('Legal Entity')}
                    size="small"
                    value={legalEntity}
                    error={isError && !legalEntity}
                    helperText={isError && !legalEntity && 'Enter Legal Entity'}
                    FormHelperTextProps={{ className: 'helper_text_cls' }}
                    onChange={(e) => updateContractData('legalEntity', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} xl={12} md={12}>
                  <TextField
                    fullWidth
                    label={t('Account Currency')}
                    size="small"
                    value={accountCurrency}
                    error={isError && !accountCurrency}
                    helperText={isError && !accountCurrency && 'Enter Account Currency'}
                    FormHelperTextProps={{ className: 'helper_text_cls' }}
                    onChange={(e) => updateContractData('accountCurrency', e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container rowSpacing={1} columnSpacing={2} item xs={12} xl={6} md={6}>
                <Grid item xs={12} xl={12} md={12}>
                  <AutocompleteWidget
                    options={transactionCurrencyArr}
                    size="small"
                    label={t('Transaction Currency')}
                    value={transactionCurrency}
                    error={isError && !transactionCurrency}
                    helperText={isError && !transactionCurrency && 'Select Transaction Currency'}
                    FormHelperTextProps={{ className: 'helper_text_cls' }}
                    onChange={(event, newValue) => {
                      updateContractData('transactionCurrency', newValue);
                    }}
                  />
                </Grid>
                <Grid item xs={12} xl={12} md={12}>
                  <AutocompleteWidget
                    options={fundingTypeArr}
                    size="small"
                    label={t('Funding Type')}
                    value={fundingType}
                    defaultValue="Customer"
                    error={isError && !fundingType}
                    helperText={isError && !fundingType && 'Select Transaction Currency'}
                    FormHelperTextProps={{ className: 'helper_text_cls' }}
                    onChange={(event, newValue) => {
                      updateContractData('fundingType', newValue);
                    }}
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
              <Typography variant="h6">{t('Financial Diamensions')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography> {t('Lorem ipsum.')} </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
        <Stack direction="row" spacing={2}>
          <Button color="secondary" variant="contained" onClick={() => navigateToContractlist()}>
            {t('Back')}
          </Button>
          <Button variant="contained" onClick={() => handleClickSaveContract()}>
            {t('Save')}
          </Button>
          <Button color="warning" variant="contained">
            {t('Complete Contract')}
          </Button>
          {isEditFlag && (
            <Button color="primary" variant="contained">
              {t('AX Integration')}
            </Button>
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" size="small" onClick={() => addNewProject()}>
          {t('Add new project')}
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
