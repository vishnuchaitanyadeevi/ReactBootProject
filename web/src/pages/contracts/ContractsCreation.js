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
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArrowRight, UploadFileOutlined } from '@mui/icons-material/';
import PercentIcon from '@mui/icons-material/Percent';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import ProjectTable from '../../components/contracts/projectTable';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import UploadFile from '../../components/UploadFile';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import RenderComponent from '../../components/RenderComponent';
import './ContractsCreation.scss';
import SimpleTable from '../../components/table/simpleTable';
import jsonData from '../../utils/project-table-data.json';
import CustomerData from '../../utils/customerslist.json';
import CustomersList from '../../components/CustomersList';
import { isEmail, isPhone, isName } from '../../utils/utils';
import { ContractData as ConData } from './Data';
import { COMPONENTS } from '../../utils/constants';
import OpenNotification from '../../components/Notification/Notification';
import { POST_OFFICE } from '../../redux/constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../../components/ServiceBoard/data';

export default function ContractsCreation() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editingRows, setEditingRows] = useState({});
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();
  const [multipleImages, setMultipleImages] = useState({ images: [] });
  const [axDefaultexpanded, setAxDefaultexpanded] = useState(true);
  const [openNotification, setNotification] = useState(false);
  const [payload, setPayload] = useState({
    country: '',
    region: '',
    customerNo: '',
    customerName: '',
    customerAddress: '',
    crNo: '',
    salesman: '',
    contractNo: '',
    contractName: '',
    contractSignOn: null,
    contractStartDate: null,
    generalDiscount: '',
    status: '',
    role: '',
    name: '',
    position: '',
    address: '',
    phoneNo: '',
    faxNo: '',
    mobileNo: '',
    emailId: '',
    note: '',
    specialAttention: '',
    scopeOfContract: '',
    legalEntity: '',
    transactionCurrency: '',
    accountCurrency: '',
    fundingType: ''
  });
  const { TEXT_FIELD, CHECKBOX, AUTOCOMPLETE, DATEPICKER, TEXT_AREA, MULTI_SELECT_BOX, ICON } = COMPONENTS;
  const masterData = useSelector((state) => state.MasterDataReducer);
  const { country, office, customerNo, serviceman, projectStatus, role, currency, fundingType } = masterData;
  const {
    countryData,
    region,
    customersNo,
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
    roles,
    name,
    position,
    address,
    phoneNo,
    faxNo,
    mobileNo,
    emailId,
    note
  } = payload;
  const handleChangeExpand = () => {
    setAxDefaultexpanded(!axDefaultexpanded);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClickSearchCustomer = () => setOpen(true);

  const componentsSet1 = [
    {
      control: AUTOCOMPLETE,
      key: 'countryData',
      label: 'Country',
      placeholder: 'Country',
      columnWidth: 6,
      options: country,
      isError: !countryData && isError,
      helperText: !countryData && isError && 'Enter Country'
    },
    {
      control: AUTOCOMPLETE,
      key: 'region',
      label: 'Region',
      placeholder: 'Region',
      columnWidth: 6,
      options: office,
      isError: !region && isError,
      helperText: !region && isError && 'Enter Region'
    },
    {
      control: AUTOCOMPLETE,
      key: 'customersNo',
      label: 'Customer Number',
      placeholder: 'Customer Number',
      columnWidth: 6,
      options: customerNo,
      isError: !customersNo && isError,
      helperText: !customersNo && isError && 'Enter Customer number'
    },
    {
      control: ICON,
      columnWidth: 3,
      onClickIcon: handleClickSearchCustomer
    },
    {
      control: TEXT_FIELD,
      key: 'customerName',
      label: 'Customer Name',
      placeholder: 'Customer Name',
      columnWidth: 12,
      isError: !customerName && isError,
      helperText: !customerName && isError && 'Enter customer name'
    },
    {
      control: TEXT_FIELD,
      key: 'customerAddress',
      label: 'Customer Address',
      placeholder: 'Customer Address',
      columnWidth: 12,
      isError: !customerAddress && isError,
      helperText: !customerAddress && isError && 'Enter Customer Address'
    },
    {
      control: TEXT_FIELD,
      key: 'crNo',
      label: 'CR Number',
      placeholder: 'CR Number',
      columnWidth: 12,
      isError: !crNo && isError,
      helperText: !crNo && isError && 'Enter CR Number'
    },
    {
      control: AUTOCOMPLETE,
      key: 'salesman',
      label: 'Salesman',
      placeholder: 'Salesman',
      columnWidth: 12,
      options: serviceman,
      isError: !salesman && isError,
      helperText: !salesman && isError && 'Enter Salesman'
    }
  ];

  const componentsSet2 = [
    {
      control: TEXT_FIELD,
      key: 'contractNo',
      label: 'Contract Number',
      placeholder: 'Contract Number',
      columnWidth: 6,
      isError: !contractNo && isError,
      helperText: !contractNo && isError && 'Enter Contract Number'
    },
    {
      control: TEXT_FIELD,
      key: 'contractName',
      label: 'Contract Name',
      placeholder: 'Contract Name',
      columnWidth: 12,
      isError: !contractName && isError,
      helperText: !contractName && isError && 'Enter Contract Name'
    },
    {
      control: DATEPICKER,
      key: 'contractSignOn',
      label: 'Contract Sign On',
      inputFormat: 'dd-MM-yyyy',
      views: ['year', 'month', 'day'],
      columnWidth: 12,
      error: !contractSignOn && isError,
      helperText: !contractSignOn && isError && 'Enter Contract Sign On Date'
    },
    {
      control: DATEPICKER,
      key: 'contractStartDate',
      label: 'Contract Start Date',
      inputFormat: 'dd-MM-yyyy',
      views: ['year', 'month', 'day'],
      columnWidth: 12,
      error: !contractStartDate && isError,
      helperText: !contractStartDate && isError && 'Enter Contract Start Date'
    },
    {
      control: TEXT_FIELD,
      key: 'generalDiscount',
      label: 'General Discount',
      placeholder: 'General Discount',
      columnWidth: 4,
      isFieldIcon: true,
      Icon: PercentIcon,
      isError: !generalDiscount && isError,
      helperText: !generalDiscount && isError && 'Enter General Discount'
    },
    {
      control: AUTOCOMPLETE,
      key: 'status',
      label: 'Status',
      placeholder: 'Status',
      columnWidth: 6,
      options: projectStatus,
      isError: !status && isError,
      helperText: !status && isError && 'Enter Project Status'
    }
  ];

  const componentsSet3 = [
    {
      control: AUTOCOMPLETE,
      key: 'roles',
      label: 'Role',
      placeholder: 'Role',
      columnWidth: 6,
      options: role,
      isError: !roles && isError,
      helperText: !roles && isError && 'Enter Role'
    },
    {
      control: TEXT_FIELD,
      key: 'name',
      label: 'Name',
      placeholder: 'name',
      columnWidth: 12,
      isError: !name && isError,
      helperText: !name && isError && 'Enter Name'
    },
    {
      control: TEXT_FIELD,
      key: 'position',
      label: 'Position',
      placeholder: 'Position',
      columnWidth: 12,
      isError: !position && isError,
      helperText: !position && isError && 'Enter Position'
    },
    {
      control: TEXT_FIELD,
      key: 'address',
      label: 'Address',
      placeholder: 'Address',
      columnWidth: 12,
      isError: !address && isError,
      helperText: !address && isError && 'Enter Address'
    },
    {
      control: TEXT_FIELD,
      key: 'phoneNo',
      label: 'Phone Number',
      placeholder: 'Phone Number',
      columnWidth: 12,
      isError: !phoneNo && isError,
      helperText: !phoneNo && isError && 'Enter Phone Number'
    },
    {
      control: TEXT_FIELD,
      key: 'faxNo',
      label: 'Fax Number',
      placeholder: 'Fax Number',
      columnWidth: 12,
      isError: !faxNo && isError,
      helperText: !faxNo && isError && 'Enter Fax Number'
    },
    {
      control: TEXT_FIELD,
      key: 'mobileNo',
      label: 'Mobile Number',
      placeholder: 'Mobile Number',
      columnWidth: 12,
      isError: isError && (!mobileNo || isPhone(mobileNo)),
      helperText:
        (isError && !mobileNo && 'Enter Mobile Number') || (isError && isPhone(mobileNo) && 'Not Valid Mobile Number')
    },
    {
      control: TEXT_FIELD,
      key: 'emailId',
      label: 'Email ID',
      placeholder: 'Email ID',
      columnWidth: 12,
      isError: isError && (!emailId || isEmail(emailId)),
      helperText: (isError && !emailId && 'Enter Email Id') || (isError && isEmail(emailId) && 'Not Valid Email Id')
    },
    {
      control: TEXT_FIELD,
      key: 'note',
      label: 'Note',
      placeholder: 'Note',
      columnWidth: 12
    }
  ];

  const componentsSet4 = [
    {
      control: TEXT_AREA,
      key: 'specialAttention',
      label: 'Special Attention / Notes',
      placeholder: 'Special Attention / Notes',
      columnWidth: 12,
      controlStyle: { width: '100%', padding: '0.5rem' }
    },
    {
      control: TEXT_AREA,
      key: 'scopeOfContract',
      label: 'Scope Of Contract',
      placeholder: 'Scope Of Contract',
      columnWidth: 12,
      controlStyle: { width: '100%', padding: '0.5rem' }
    }
  ];

  const componentsSet5 = [
    {
      control: TEXT_FIELD,
      key: 'legalEntity',
      label: 'Legal Entity',
      placeholder: 'Legal Entity',
      columnWidth: 6
    },
    {
      control: AUTOCOMPLETE,
      key: 'transactionCurrency',
      label: 'Transaction Currency',
      placeholder: 'transactionCurrency',
      columnWidth: 6,
      options: currency
    },
    {
      control: TEXT_FIELD,
      key: 'accountCurrency',
      label: 'Legal Entity',
      placeholder: 'Legal Entity',
      columnWidth: 6
    },
    {
      control: AUTOCOMPLETE,
      key: 'fundingType',
      label: 'Funding Type',
      placeholder: 'Funding Type',
      columnWidth: 6,
      options: fundingType
    }
  ];

  console.log('officce,,,', office);
  // const [tableData, setTableData] = useState({});
  let tableData = [];

  const updatePayload = (pairs) => setPayload({ ...payload, ...pairs });

  const handleChangeData = (key, val) => {
    console.log('key.val...', key, val);
    updatePayload({ [key]: val });
    switch (key) {
      case 'countryData': {
        const countryData = SEVICE_DASHBOARD_FILTER_MASTER_DATA.OFFICE.find((office) => office.country === val);
        console.log('country...', countryData);
        if (countryData) {
          dispatch({ type: POST_OFFICE, data: countryData?.offices || [] });
        }
        break;
      }
      default:
        break;
    }
  };

  const [checkEvent, setCheckEvent] = useState(false);
  const handleClickSaveContract = () => {
    if (
      !countryData ||
      !region ||
      !customerNo ||
      !customerName ||
      !customerAddress ||
      !crNo ||
      !salesman ||
      !contractNo ||
      !contractName ||
      !generalDiscount ||
      !status ||
      !roles ||
      !name ||
      !position ||
      !address ||
      !phoneNo ||
      !faxNo ||
      !mobileNo ||
      isPhone(mobileNo) ||
      !emailId ||
      isEmail(emailId)
    ) {
      setIsError(true);
      console.log('in error', payload);
    } else {
      setIsError(false);
      console.log('contract data...', payload);
      setNotification(true);
    }
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
      const popData = ConData.find((item) => item.contractNumber === paramId);
      console.log('log', popData);
      updateFormFields(popData);
    }
  }, [isEditFlag]);

  const updateFormFields = (popData) => {
    console.log('PopData', popData);
    // setContractData({
    //   ...contractData,
    //   region: popData?.region,
    //   contractName: popData?.contractName,
    //   country: popData?.country,
    //   contractNo: popData?.contractNumber,
    //   contractSignOn: popData?.contractSignOn,
    //   contractStartDate: popData?.contractStartDate,
    //   customerNo: popData?.customerNumber,
    //   // customerName: popData?.customerName,
    //   // customerAddress: popData?.customerAddress,
    //   salesman: popData?.salesman,
    //   name: popData?.signName,
    //   position: popData?.signPos,
    //   address: popData?.signAdd,
    //   phoneNo: popData?.phoneNo,
    //   faxNo: popData?.faxNo,
    //   mobileNo: popData?.mobileNo,
    //   emailId: popData?.emailId,
    //   note: popData?.note,
    //   specialAttention: popData?.specialAttention,
    //   scopeOfContract: popData?.scopeOfContract,
    //   legalEntity: popData?.legalEntity,
    //   transactionCurrency: popData?.transactionCurrency,
    //   accountCurrency: popData?.accountCurrency,
    //   fundingType: popData?.fundingType,
    //   generalDiscount: popData?.generalDiscount,
    //   crNo: popData?.crNo
    // });
  };

  // useEffect(() => {
  //   if (customerNo) {
  //     console.log('calling... only customerNo no', customerNo);
  //     const newData = CustomerData.find((item) => item.custno === customerNo);
  //     setContractData({ ...contractData, customerName: newData.name, customerAddress: newData.address });
  //   } /* else {
  //     setContractData({ ...contractData, customerName: '', customerAddress: '' });
  //   } */
  // }, [customerNo]);

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
  const headCellsType = ['NONE', 'LINK', 'NONE', 'NONE', 'NONE', 'DATE', 'DATE', 'NONE', 'NONE', 'NONE'];
  console.log('add contract', isEditFlag);
  tableData = isEditFlag ? jsonData : [];
  const numericFields = ['status', 'prjno', 'sdt', 'edt', 'extp', 'grpd', 'prm'];
  const handleCloseNotification = () => setNotification(false);
  return (
    <Grid container spacing={2} padding={3}>
      {openNotification && (
        <OpenNotification
          open={openNotification}
          onClose={handleCloseNotification}
          severityType="success"
          message="Successfully Saved Contract"
        />
      )}
      {open && <CustomersList openFlag={open} handleCloseDialog={(param) => setOpen(param)} />}
      <Grid item xs={12} lg={12} display="flex" justifyContent="center" style={{ marginBottom: '1rem' }}>
        <Typography variant="h4">{isEditFlag ? `${t('Contract')} - ${paramId}` : t('Add Contract')}</Typography>
      </Grid>

      {/* Grid for Customer Details */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">{t('Customer Details')}</Typography>
          <Grid style={{ marginTop: 0 }} container spacing={3}>
            {/* Components for customer details */}
            {componentsSet1.map((comp) => (
              <RenderComponent metaData={comp} payload={payload} ind={1} handleChange={handleChangeData} />
            ))}
            <Grid item xs={12}>
              <Typography variant="h6">{t('Signatory Information')}</Typography>
            </Grid>
            {/* Components for Signatory information */}
            {componentsSet3.map((comp) => (
              <RenderComponent metaData={comp} payload={payload} ind={1} handleChange={handleChangeData} />
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">{t('Contract Details')}</Typography>
          <Grid style={{ marginTop: 0 }} container spacing={3}>
            {/* Components for Contract Details */}
            {componentsSet2.map((comp) => (
              <RenderComponent metaData={comp} payload={payload} ind={1} handleChange={handleChangeData} />
            ))}
          </Grid>
          <Grid style={{ display: 'fles', alignItems: 'center' }} item xs={12} sm={6}>
            <Typography variant="h6">{t('Additional Information')}</Typography>
          </Grid>
          {/* Components for Additional Information */}
          {componentsSet4.map((comp) => (
            <RenderComponent metaData={comp} payload={payload} ind={1} handleChange={handleChangeData} />
          ))}
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

      {/* Grid for ax fields */}
      {/* Components for ax fields */}
      <Grid container spacing={3} style={{ marginTop: 0 }}>
        <Grid item xs={12} sm={12}>
          <Accordion expanded={axDefaultexpanded} onChange={handleChangeExpand}>
            <AccordionSummary expandIcon={<ArrowRight />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography variant="h6">{t('AX Default Fields')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={3}>
                    {componentsSet5.map((comp) => (
                      <RenderComponent metaData={comp} payload={payload} ind={1} handleChange={handleChangeData} />
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{t('Financial Diamensions')}</Typography>
                  <Typography> {t('Lorem ipsum.')} </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: 0 }} item xs={12} lg={12} justifyContent="center">
        <Stack direction="row" spacing={2}>
          <Button color="secondary" variant="contained" onClick={() => navigateToContractlist()}>
            {t('Back')}
          </Button>
          <Button onClick={handleClickSaveContract} variant="contained">
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
          dataKey="id"
          editMode="row"
          editOption
          numericFields={numericFields}
          headCellsType={headCellsType}
        />
      </Grid>
    </Grid>
  );
}
