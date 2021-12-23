import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import useSettings from '../../hooks/useSettings';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import RadioGroupComponent from './RadioGroupComponent';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import UploadFile from '../../components/UploadFile';
import SimpleTable from '../../components/table/simpleTable';
import jsonData from '../../utils/create-project-table-data.json';
import ProjectTable from '../../components/contracts/projectTable';
import ContractJson from '../../utils/Contract-List-Data.json';
import './ProjectCreation.scss';

const tableData = [];
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
const numericFields = ['itemCode', 'serialNumber', 'qty', 'sla', 'oStatus', 'serviceSubjOwnerShip'];
function ProjectCreation() {
  const { themeMode, onChangeMode } = useSettings();
  const { t } = useTranslation();
  const [tableData, setTableData] = useState(jsonData);
  const [editingRows, setEditingRows] = useState({});
  const [uploadProject, setUploadProject] = useState({ images: [] });
  const handleChangeExecutionType = (e) => console.log('execution type', e.target.value);
  const handleChangeServiceFrequencySetting = (e) => console.log('service frequency setting', e.target.value);
  const handleChangeInvoiceRecipient = (e) => console.log('Invoice recipient', e.target.value);
  const handleChangeProjectEndDate = (e) => console.log('End date', e.target.value);
  const [axDefaultexpanded, setAxDefaultexpanded] = useState(true);
  const [financialDimensionExpanded, setFinancialDimensionExpanded] = useState(true);
  const handleChange = (panel) => (event, isExpanded) => setAxDefaultexpanded(isExpanded ? panel : false);
  const handleChangeFinancialDimension = (panel) => (event, isExpanded) =>
    setFinancialDimensionExpanded(isExpanded ? panel : false);
  // handle change selected file
  const handleUploadProject = useCallback((acceptedFiles) => {
    setUploadProject({
      ...uploadProject,
      images: acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  });
  const projectLocation = [
    { label: `${t('CreateProject.Saudi Arabia')}`, value: 'Saudi Arabia' },
    { label: `${t('CreateProject.Qatar')}`, value: 'Qatar' },
    { label: `${t('CreateProject.Oman')}`, value: 'Oman' },
    { label: `${t('CreateProject.Kuwait')}`, value: 'Kuwait' },
    { label: `${t('CreateProject.Iraq')}`, value: 'Iraq' },
    { label: `${t('CreateProject.Bahrain')}`, value: 'Bahrain' }
  ];
  const executionType = [
    { name: `${t('CreateProject.Regular')}`, val: 'Regular' },
    { name: `${t('CreateProject.Discrete')}`, val: 'Discrete' },
    { name: `${t('CreateProject.Trial')}`, val: 'Trial' }
  ];
  const serviceFrequencySettings = [
    { name: `${t('CreateProject.Daily')}`, val: 'Daily' },
    { name: `${t('CreateProject.Weekly')}`, val: 'Weekly' },
    { name: `${t('CreateProject.Monthly')}`, val: 'Monthly' },
    { name: `${t('CreateProject.Yearly')}`, val: 'Yearly' }
  ];
  const invoiceRecipient = [
    { name: `${t('CreateProject.Send invoice to customer address')}`, val: 'Send invoice to customer address' },
    {
      name: `${t('CreateProject.Send invoice to project location address')}`,
      val: 'Send invoice to project location address'
    },
    { name: `${t('CreateProject.Do not schedule invoices')}`, val: 'Do not schedule invoices' },
    { name: `${t('CreateProject.Schedule invoice with service')}`, val: 'Schedule invoice with service' },
    { name: `${t('CreateProject.Discrete invoice scheduling pattern')}`, val: 'Discrete invoice scheduling pattern' }
  ];
  const invoiceFrequency = [
    { name: `${t('CreateProject.Daily')}`, val: 'Daily' },
    { name: `${t('CreateProject.Weekly')}`, val: 'Weekly' },
    { name: `${t('CreateProject.Monthly')}`, val: 'Monthly' },
    { name: `${t('CreateProject.Yearly')}`, val: 'Yearly' }
  ];
  const endDateTypes = [
    { name: `${t('CreateProject.Fix Date')}`, val: 'Fix Date' },
    { name: `${t('CreateProject.Number Of Services')}`, val: 'Number Of Services' }
  ];
  // handle remove selcted file
  const handleRemove = (file) => {
    const filteredItems = uploadProject.images.filter((_file) => _file !== file);
    setUploadProject({ ...uploadProject, images: filteredItems });
  };

  const { pathname } = useLocation();
  const { state } = useLocation();
  const editId = state;
  const navigate = useNavigate();

  const navigateToContractlist = () => {
    navigate('/contractsList', { replace: true });
  };

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  const isEditFlag = match('project/edit/:id');

  useEffect(() => {
    if (isEditFlag) {
      let popData;
      // currently this for loop part has some logical issues (Will have to fix that)
      for (let idx = 0; idx !== 6; idx += 1) {
        if (ContractJson.find((item) => item.projects[idx].project_number === editId)) {
          popData = ContractJson.find((item) => item.projects[idx].project_number === editId);
          console.log('log', popData.projects[idx].project_number);
          updateFormFields(popData, idx);
          break;
        }
      }
    }
  }, [isEditFlag]);

  const updateFormFields = (popData, idx) => {
    setProjectData({
      ...projectData,
      projectNo: popData.projects[idx]?.project_number,
      execution: popData.projects[idx]?.execution,
      region: popData.projects[idx]?.region,
      projectName: popData.projects[idx]?.projectName,
      endDate: popData.projects[idx]?.end_date,
      discount: popData.projects[idx]?.discount,
      specialAttention: popData.projects[idx]?.specialAttention,
      scopeOfProject: popData.projects[idx]?.scopeOfProject,
      serviceFrequency: popData.projects[idx]?.serviceFrequency,
      recur: popData.projects[idx]?.recur,
      invoice: popData.projects[idx]?.invoice,
      invoiceRec: popData.projects[idx]?.invoiceRec,
      recurDays: popData.projects[idx]?.recurDays,
      projectVal: popData.projects[idx]?.projectVal,
      projName: popData.projects[idx]?.projName,
      projPos: popData.projects[idx]?.projPos,
      projAdd: popData.projects[idx]?.projAdd,
      projPhone: popData.projects[idx]?.projPhone,
      projFax: popData.projects[idx]?.projFax,
      projMob: popData.projects[idx]?.projMob,
      projMail: popData.projects[idx]?.projMail,
      projNote: popData.projects[idx]?.projNote,
      projLoc: popData.projects[idx]?.projLoc,
      projSla: popData.projects[idx]?.projSla,
      projbus: popData.projects[idx]?.projbus,
      projSub: popData.projects[idx]?.projSub,
      projStat: popData.projects[idx]?.projStat,
      projClass: popData.projects[idx]?.projClass,
      projSale: popData.projects[idx]?.projSale,
      projServ: popData.projects[idx]?.projServ,
      projRole: popData.projects[idx]?.projRole,
      projEndDate: popData.projects[idx]?.projEndDate
    });
  };

  const updateProjectData = (key, val) => {
    setProjectData({ ...projectData, [key]: val });
    console.log(key, val);
  };

  const columnDataForProjects = [
    {
      field: 'itemCode',
      header: 'Item Code',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'itemName',
      header: 'Item Name',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'sla',
      header: 'SLA',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'oStatus',
      header: 'O/status',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'serialNumber',
      header: 'Serial Number',
      editorElement: null,
      style: { width: '15%' },
      sortable: true,
      filter: true
    },
    {
      field: 'specialNotes',
      header: 'Special Notes',
      editorElement: null,
      style: { width: '15%' },
      sortable: true,
      filter: true
    },
    {
      field: 'qty',
      header: 'Qty',
      editorElement: null,
      style: { width: '15%' },
      sortable: true,
      filter: true
    },
    {
      field: 'serviceSubjOwnerShip',
      header: 'Service Subject OwnerShip',
      editorElement: null,
      style: { width: '15%' },
      sortable: true,
      filter: true
    }
  ];

  const [projectData, setProjectData] = useState({
    execution: '',
    projectNo: '',
    region: '',
    projectName: '',
    signedOnDate: '',
    startDate: '',
    endDate: '',
    discount: '',
    specialAttention: '',
    scopeOfProject: '',
    serviceFrequency: '',
    recur: '',
    invoice: '',
    invoiceRec: '',
    recurDays: '',
    projectVal: '',
    projName: '',
    projPos: '',
    projAdd: '',
    projPhone: '',
    projFax: '',
    projMob: '',
    projMail: '',
    projNote: '',
    projLoc: '',
    projSla: '',
    projbus: '',
    projSub: '',
    projStat: '',
    projClass: '',
    projSale: '',
    projServ: '',
    projRole: '',
    projEndDate: ''
  });

  const {
    execution,
    projectNo,
    region,
    projectName,
    startDate,
    endDate,
    discount,
    specialAttention,
    scopeOfProject,
    serviceFrequency,
    recur,
    invoice,
    invoiceRec,
    recurDays,
    projectVal,
    projName,
    projPos,
    projAdd,
    projPhone,
    projFax,
    projMob,
    projMail,
    projNote,
    projLoc,
    projSla,
    projbus,
    projSub,
    projStat,
    projClass,
    projSale,
    projServ,
    projRole,
    projEndDate,
    signedOnDate
  } = projectData;

  const [checkEvent, setCheckEvent] = useState(false);
  const handleClickSaveProject = () => {
    const checkFile = uploadProject.images.length;
    setCheckEvent(true);
    if (
      !execution ||
      !projectNo ||
      !region ||
      !projectName ||
      !startDate ||
      !endDate ||
      !discount ||
      !specialAttention ||
      !scopeOfProject ||
      !serviceFrequency ||
      !recur ||
      !invoice ||
      !invoiceRec ||
      !recurDays ||
      !projectVal ||
      !projName ||
      !projPos ||
      !projAdd ||
      !projPhone ||
      !projFax ||
      !projMob ||
      !projMail ||
      !projNote ||
      !projLoc ||
      !projSla ||
      !projbus ||
      !projSub ||
      !projStat ||
      !projClass ||
      !projSale ||
      !projServ ||
      !projRole ||
      !projEndDate ||
      !checkFile
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  const [isError, setIsError] = useState(false);

  return (
    <Grid className="project_creation_main_grid">
      <Grid container spacing={3}>
        <Grid className="main_title_cls" item xs={12}>
          <Typography variant="h4">
            {isEditFlag ? `${t('CreateProject.EditProject')} - ${editId}` : t('CreateProject.CreateProject')}
          </Typography>
        </Grid>

        {/* Grid for project details section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" className="form_sub_title_cls">
            {t('CreateProject.ProjectDetails')}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <RadioGroupComponent
                title={t('CreateProject.ExecutionType')}
                options={executionType}
                value={execution}
                error={isError && !execution}
                helperText={isError && !execution && 'Select Execution Type'}
                onChange={(event) => updateProjectData('execution', event.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.ProjectNo')}
                size="small"
                value={projectNo}
                error={isError && !projectNo}
                helperText={isError && !projectNo && 'Enter Project Number'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projectNo', e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.Region')}
                size="small"
                value={region}
                error={isError && !region}
                helperText={isError && !region && 'Enter Region'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('region', e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label={t('CreateProject.ProjectName')}
                size="small"
                value={projectName}
                error={isError && !projectName}
                helperText={isError && !projectName && 'Enter Project Name'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projectName', e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.ProjectLocation')}
                disablePortal
                autoSelect
                size="small"
                value={projLoc}
                error={isError && !projLoc}
                helperText={isError && !projLoc && 'Select Project Location'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projLoc', newValue);
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.ProjectSLA')}
                disablePortal
                autoSelect
                size="small"
                value={projSla}
                error={isError && !projSla}
                helperText={isError && !projSla && 'Select Project SLA'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projSla', newValue);
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography variant="h5" className="form_sub_title_cls">
                {t('CreateProject.ProjectBusinessCategory')}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.BusinessType')}
                disablePortal
                autoSelect
                size="small"
                value={projbus}
                error={isError && !projbus}
                helperText={isError && !projbus && 'Select Business Type'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projbus', newValue);
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.SubType')}
                disablePortal
                autoSelect
                size="small"
                value={projSub}
                error={isError && !projSub}
                helperText={isError && !projSub && 'Select Sub-Type'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projSub', newValue);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BasicDatePicker
                label={t('CreateProject.ProjectSignedOn')}
                inputFormat="dd-MM-yyyy"
                views={['year', 'month', 'day']}
                value={signedOnDate}
                error={isError && !signedOnDate}
                helperText={isError && !signedOnDate && 'Enter Signed-On Date'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(newValue) => updateProjectData('signedOnDate', newValue)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BasicDatePicker
                label={t('CreateProject.ProjectStartDate')}
                inputFormat="dd-MM-yyyy"
                views={['year', 'month', 'day']}
                value={startDate}
                error={isError && !startDate}
                helperText={isError && !startDate && 'Enter Project Start Date'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(newValue) => updateProjectData('startDate', newValue)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent
                title={t('CreateProject.ProjectEndDate')}
                options={endDateTypes}
                value={projEndDate}
                error={isError && !projEndDate}
                helperText={isError && !projEndDate && 'Select Project End Date'}
                onChange={(event) => updateProjectData('projEndDate', event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BasicDatePicker
                label={t('CreateProject.ProjectEndDate')}
                inputFormat="dd-MM-yyyy"
                views={['year', 'month', 'day']}
                value={endDate}
                error={isError && (!endDate || endDate < startDate)}
                helperText={
                  (isError && !endDate && 'Enter Project End Date') ||
                  (isError && endDate < startDate && 'End Date can not be before Start Date')
                }
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(newValue) => updateProjectData('endDate', newValue)}
                disabled={!startDate}
                minDate={startDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.ProjectStatus')}
                disablePortal
                autoSelect
                size="small"
                value={projStat}
                error={isError && !projStat}
                helperText={isError && !projStat && 'Select Project Status'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projStat', newValue);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.ProjectClassification')}
                disablePortal
                autoSelect
                size="small"
                value={projClass}
                error={isError && !projClass}
                helperText={isError && !projClass && 'Select Project Class'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projClass', newValue);
                }}
              />
            </Grid>
            <Grid style={{ marginTop: '0.3rem' }} item xs={12} sm={12}>
              <TextField
                fullWidth
                label={t('CreateProject.ProjectDiscount')}
                InputProps={{
                  endAdornment: <InputAdornment position="end">%</InputAdornment>
                }}
                size="small"
                value={discount}
                error={isError && !discount}
                helperText={isError && !discount && 'Enter Discount'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('discount', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.Salesman')}
                disablePortal
                autoSelect
                size="small"
                value={projSale}
                error={isError && !projSale}
                helperText={isError && !projSale && 'Select Salesman'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projSale', newValue);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.Serviceman')}
                disablePortal
                autoSelect
                size="small"
                value={projServ}
                error={isError && !projServ}
                helperText={isError && !projServ && 'Select Serviceman'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projServ', newValue);
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography variant="h6" className="form_sub_title_cls">
                {t('CreateProject.AdditionalInformation')}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label={t('CreateProject.SpecialAttentionNotes')}
                size="small"
                value={specialAttention}
                onChange={(e) => updateProjectData('specialAttention', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label={t('CreateProject.ScopeOfProject')}
                size="small"
                value={scopeOfProject}
                error={isError && !scopeOfProject}
                helperText={isError && !scopeOfProject && 'Enter Scope of Project'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('scopeOfProject', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <UploadFile
                showPreview
                maxSize={3145728}
                accept="application/pdf "
                files={uploadProject.images}
                onDrop={handleUploadProject}
                onRemove={handleRemove}
                backgroundColor="#70cd71"
                buttonLabel={t('CreateProject.UploadProject')}
                checkEmpty={Boolean(uploadProject.images.length)}
                eventCalled={Boolean(checkEvent)}
              />
            </Grid>
            <Grid item xs={12} xl={12} md={12} hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}>
              <Accordion style={{ boxShadow: 'none' }} fullWidth>
                <AccordionSummary
                  style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}
                  expandIcon={<ArrowRight />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography variant="h6">{t('CreateProject.AxDefaultFields')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography> Lorem ipsum. </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>

        {/* Grid for service frequency settings details */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" className="form_sub_title_cls">
            {t('CreateProject.ServiceFrequencySettings')}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent
                options={serviceFrequencySettings}
                value={serviceFrequency}
                error={isError && !serviceFrequency}
                helperText={isError && !serviceFrequency && 'Select Service Frequency'}
                onChange={(event) => updateProjectData('serviceFrequency', event.target.value)}
              />
              <Grid style={{ marginTop: '0.3rem' }} item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label={t('CreateProject.RecurEvery')}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">{t('CreateProject.Days')}</InputAdornment>
                  }}
                  type="number"
                  size="small"
                  value={recur}
                  error={isError && !recur}
                  helperText={isError && !recur && 'Enter Number of Days for Recurrence'}
                  FormHelperTextProps={{ className: 'helper_text_cls' }}
                  onChange={(e) => updateProjectData('recur', e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6">{t('CreateProject.ServiceRecurrence')}</Typography>
              <Grid
                item
                xs={12}
                sm={12}
                className={
                  themeMode === 'light' ? 'service_invoice_recurrence_light' : 'service_invoice_recurrence_dark'
                }
              />
            </Grid>
          </Grid>

          <Grid style={{ marginTop: '0.1rem' }} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                style={{
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}
              >
                {t('CreateProject.InvoiceRecipientAndFrequencySettings')}
              </Typography>
              <RadioGroupComponent
                title={t('CreateProject.InvoiceRecipient')}
                options={invoiceRecipient}
                value={invoiceRec}
                error={isError && !invoiceRec}
                helperText={isError && !invoiceRec && 'Select Invoice Recipient Settings'}
                onChange={(event) => updateProjectData('invoiceRec', event.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6">{t('CreateProject.InvoiceRecurrence')}</Typography>
              <Grid
                item
                xs={12}
                sm={12}
                className={
                  themeMode === 'light' ? 'service_invoice_recurrence_light' : 'service_invoice_recurrence_dark'
                }
              />
            </Grid>
          </Grid>

          <Grid style={{ marginTop: '0.2rem' }} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent
                title={t('CreateProject.InvoiceFrequency')}
                options={invoiceFrequency}
                value={invoice}
                error={isError && !invoice}
                helperText={isError && !invoice && 'Select Invoice Frequency'}
                onChange={(event) => updateProjectData('invoice', event.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.Recur every')}
                InputProps={{
                  endAdornment: <InputAdornment position="end">{t('CreateProject.Days')}</InputAdornment>
                }}
                type="number"
                size="small"
                value={recurDays}
                error={isError && !recurDays}
                helperText={isError && !recurDays && 'Enter Number of Days for Recurrence'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('recurDays', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label={t('CreateProject.Project Value')}
                InputProps={{
                  endAdornment: <InputAdornment position="start">{t('CreateProject.SAR')}</InputAdornment>
                }}
                size="small"
                value={projectVal}
                error={isError && !projectVal}
                helperText={isError && !projectVal && 'Enter Project Value'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projectVal', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6">{t('CreateProject.SignatoryInformation')}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.SelectVariousRoles')}
                disablePortal
                autoSelect
                size="small"
                value={projRole}
                error={isError && !projRole}
                helperText={isError && !projRole && 'Select Role'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(event, newValue) => {
                  updateProjectData('projRole', newValue);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.Name')}
                size="small"
                value={projName}
                error={isError && !projName}
                helperText={isError && !projName && 'Enter Name'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.Position')}
                size="small"
                value={projPos}
                error={isError && !projPos}
                helperText={isError && !projPos && 'Enter Position'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projPos', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.Address')}
                size="small"
                value={projAdd}
                error={isError && !projAdd}
                helperText={isError && !projAdd && 'Enter Address'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projAdd', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.PhoneNo')}
                size="small"
                value={projPhone}
                error={isError && !projPhone}
                helperText={isError && !projPhone && 'Enter Phone Number'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projPhone', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.FaxNo')}
                size="small"
                value={projFax}
                error={isError && !projFax}
                helperText={isError && !projFax && 'Enter Fax Number'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projFax', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.MobileNo')}
                size="small"
                value={projMob}
                error={isError && !projMob}
                helperText={isError && !projMob && 'Enter Mobile Number'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projMob', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.emailID')}
                size="small"
                value={projMail}
                error={isError && !projMail}
                helperText={isError && !projMail && 'Enter E-Mail ID'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projMail', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('CreateProject.Note')}
                size="small"
                value={projNote}
                error={isError && !projNote}
                helperText={isError && !projNote && 'Enter Note'}
                FormHelperTextProps={{ className: 'helper_text_cls' }}
                onChange={(e) => updateProjectData('projNote', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <UploadFile
                showPreview
                maxSize={3145728}
                accept="application/pdf"
                files={uploadProject.images}
                onDrop={handleUploadProject}
                onRemove={handleRemove}
                backgroundColor="#70cd71"
                buttonLabel={t('CreateProject.AgreementLPONo')}
                checkEmpty={Boolean(uploadProject.images.length)}
                eventCalled={Boolean(checkEvent)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              xl={12}
              md={12}
              hidden={!(financialDimensionExpanded === 'panel2' || financialDimensionExpanded === true)}
            >
              <Accordion style={{ boxShadow: 'none' }} fullWidth>
                <AccordionSummary
                  style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}
                  expandIcon={<ArrowRight />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography variant="h6">{t('CreateProject.FinancialDimensions')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography> Lorem ipsum. </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        {/* Grid for button section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
            <Button variant="contained" color="secondary" onClick={navigateToContractlist}>
              {t('CreateProject.Back')}
            </Button>
            <Button variant="contained" style={{ marginLeft: '1rem' }} onClick={() => handleClickSaveProject()}>
              {t('CreateProject.Save')}
            </Button>
            <Button style={{ marginLeft: '1rem' }} variant="contained" color="secondary">
              {t('CreateProject.Renew')}
            </Button>
          </Grid>
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
            type="text"
            title="View project"
            editOption
            btnLabel={t('CreateProject.Add New Service Subject')}
            numericFields={numericFields}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectCreation;
