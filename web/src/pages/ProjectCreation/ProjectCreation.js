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

const projectLocation = [
  { label: 'Saudi Arabia', value: 'Saudi Arabia' },
  { label: 'Qatar', value: 'Qatar' },
  { label: 'Oman', value: 'Oman' },
  { label: 'Kuwait', value: 'Kuwait' },
  { label: 'Iraq', value: 'Iraq' },
  { label: 'Bahrain', value: 'Bahrain' }
];

const executionType = [
  { name: 'Regular', val: 'Regular' },
  { name: 'Discrete', val: 'Discrete' },
  { name: 'Trial', val: 'Trial' }
];

const serviceFrequencySettings = [
  { name: 'Daily', val: 'Daily' },
  { name: 'Weekly', val: 'Weekly' },
  { name: 'Monthly', val: 'Monthly' },
  { name: 'Yearly', val: 'Yearly' }
];

const invoiceRecipient = [
  { name: 'Send invoice to customer address', val: 'Send invoice to customer address' },
  { name: 'Send invoice to project location address', val: 'Send invoice to project location address' },
  { name: 'Do not schedule invoices', val: 'Do not schedule invoices' },
  { name: 'Schedule invoice with service', val: 'Schedule invoice with service' },
  { name: 'Discrete invoice scheduling pattern', val: 'Discrete invoice scheduling pattern' }
];

const invoiceFrequency = [
  { name: 'Daily', val: 'Daily' },
  { name: 'Weekly', val: 'Weekly' },
  { name: 'Monthly', val: 'Monthly' },
  { name: 'Yearly', val: 'Yearly' }
];

const endDateTypes = [
  { name: 'Fix Date', val: 'Fix Date' },
  { name: 'Number Of Services', val: 'Number Of Services' }
];

const numericFields = ['itemCode', 'serialNumber', 'qty', 'sla', 'oStatus', 'serviceSubjOwnerShip'];
function ProjectCreation() {
  const { t } = useTranslation();
  const { themeMode, onChangeMode } = useSettings();
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
    projEndDate
  } = projectData;

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
                onChange={handleChangeExecutionType}
                value={execution}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.ProjectNo')} size="small" value={projectNo} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Region')} size="small" value={region} />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField fullWidth label={t('CreateProject.ProjectName')} size="small" value={projectName} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.ProjectLocation')}
                disablePortal
                autoSelect
                size="small"
                value={projLoc}
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BasicDatePicker
                label={t('CreateProject.ProjectSignedOn')}
                inputFormat="dd-MM-yyyy"
                views={['year', 'month', 'day']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BasicDatePicker
                label={t('CreateProject.ProjectStartDate')}
                inputFormat="dd-MM-yyyy"
                views={['year', 'month', 'day']}
                value={startDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent
                title={t('CreateProject.ProjectEndDate')}
                options={endDateTypes}
                onChange={handleChangeProjectEndDate}
                value={projEndDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BasicDatePicker
                label={t('CreateProject.ProjectEndDate')}
                inputFormat="dd-MM-yyyy"
                views={['year', 'month', 'day']}
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
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label={t('CreateProject.ScopeOfProject')} size="small" value={scopeOfProject} />
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
                onChange={handleChangeServiceFrequencySetting}
                value={serviceFrequency}
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
                onChange={handleChangeInvoiceRecipient}
                value={invoiceRec}
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
                onChange={handleChangeInvoiceRecipient}
                value={invoice}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Recur every"
                InputProps={{
                  endAdornment: <InputAdornment position="end">{t('CreateProject.Days')}</InputAdornment>
                }}
                type="number"
                size="small"
                value={recurDays}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Project Value"
                InputProps={{
                  endAdornment: <InputAdornment position="start">{t('CreateProject.SAR')}</InputAdornment>
                }}
                size="small"
                value={projectVal}
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Name')} size="small" value={projName} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Position')} size="small" value={projPos} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Address')} size="small" value={projAdd} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.PhoneNo')} size="small" value={projPhone} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.FaxNo')} size="small" value={projFax} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.MobileNo')} size="small" value={projMob} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.emailID')} size="small" value={projMail} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Note')} size="small" value={projNote} />
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
            <Button variant="contained" style={{ marginLeft: '1rem' }}>
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
            btnLabel="Add new Service Subject"
            numericFields={numericFields}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectCreation;
