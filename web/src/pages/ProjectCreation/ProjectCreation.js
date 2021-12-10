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
import './ProjectCreation.scss';

const tableData = [];

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
  const navigate = useNavigate();

  const navigateToContractlist = () => {
    navigate('/contractsList', { replace: true });
  };

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  const isEditFlag = match('project/edit/1');
  useEffect(() => {
    console.log(isEditFlag);
  }, [isEditFlag]);

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

  return (
    <Grid className="project_creation_main_grid">
      <Grid container spacing={3}>
        <Grid className="main_title_cls" item xs={12}>
          <Typography variant="h4">
            {isEditFlag ? t('CreateProject.EditProject') : t('CreateProject.CreateProject')}
          </Typography>
        </Grid>

        {/* Grid for project details section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" className="form_sub_title_cls">
            {t('CreateProject.ProjectDetails')}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <RadioGroupComponent
                title={t('CreateProject.ExecutionType')}
                options={executionType}
                onChange={handleChangeExecutionType}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.ProjectNo')} size="small" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Region')} size="small" />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField fullWidth label={t('CreateProject.ProjectName')} size="small" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.ProjectLocation')}
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.ProjectSLA')}
                disablePortal
                autoSelect
                size="small"
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
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.SubType')}
                disablePortal
                autoSelect
                size="small"
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent
                title={t('CreateProject.ProjectEndDate')}
                options={endDateTypes}
                onChange={handleChangeProjectEndDate}
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.ProjectClassification')}
                disablePortal
                autoSelect
                size="small"
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.Salesman')}
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.Serviceman')}
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography variant="h4" className="form_sub_title_cls">
                {t('CreateProject.AdditionalInformation')}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label={t('CreateProject.SpecialAttentionNotes')} size="small" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label={t('CreateProject.ScopeOfProject')} size="small" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <UploadFile
                showPreview
                maxSize={3145728}
                accept="application/pdf,image/*"
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
                  <Typography variant="h4" className="form_sub_title_cls">
                    {t('CreateProject.AxDefaultFields')}
                  </Typography>
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
          <Typography variant="h4" className="form_sub_title_cls">
            {t('CreateProject.ServiceFrequencySettings')}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent options={serviceFrequencySettings} onChange={handleChangeServiceFrequencySetting} />
              <Grid style={{ marginTop: '0.3rem' }} item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label={t('CreateProject.RecurEvery')}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">{t('CreateProject.Days')}</InputAdornment>
                  }}
                  type="number"
                  size="small"
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h5">{t('CreateProject.ServiceRecurrence')}</Typography>
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
                variant="h5"
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
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h5">{t('CreateProject.InvoiceRecurrence')}</Typography>
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
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4">{t('CreateProject.SignatoryInformation')}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <AutocompleteWidget
                options={projectLocation}
                label={t('CreateProject.SelectVariousRoles')}
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Name')} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Position')} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Address')} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.PhoneNo')} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.FaxNo')} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.MobileNo')} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.emailID')} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('CreateProject.Note')} size="small" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <UploadFile
                showPreview
                maxSize={3145728}
                accept="application/pdf,image/*"
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
                  <Typography variant="h4" className="form_sub_title_cls">
                    {t('CreateProject.FinancialDimensions')}
                  </Typography>
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
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectCreation;
