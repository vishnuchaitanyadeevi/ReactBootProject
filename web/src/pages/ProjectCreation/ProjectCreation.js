import React, { useState, useCallback } from 'react';
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
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import RadioGroupComponent from './RadioGroupComponent';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import UploadFile from '../../components/UploadFile';
import ProjectTable from './ProjectList';
import './ProjectCreation.scss';

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

  return (
    <Grid className="project_creation_main_grid">
      <Grid container spacing={3}>
        <Grid className="main_title_cls" item xs={12}>
          <Typography variant="subtitle1">Create Project</Typography>
        </Grid>

        {/* Grid for project details section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" className="form_sub_title_cls">
            Project Details
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <RadioGroupComponent
                title="Execution Type"
                options={executionType}
                onChange={handleChangeExecutionType}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Project No." size="small" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Region" size="small" />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField fullWidth label="Project Name" size="small" />
            </Grid>

            <Grid item xs={12} sm={12}>
              <AutocompleteWidget
                options={projectLocation}
                label="Project Location"
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <AutocompleteWidget options={projectLocation} label="Project SLA" disablePortal autoSelect size="small" />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography variant="body2" className="form_sub_title_cls">
                Project Business Category
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget
                options={projectLocation}
                label="Business Type"
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AutocompleteWidget options={projectLocation} label="Sub-type" disablePortal autoSelect size="small" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <BasicDatePicker label="Project Signed On" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <BasicDatePicker label="Project Start Date" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent
                title="Project End Date"
                options={endDateTypes}
                onChange={handleChangeProjectEndDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BasicDatePicker label="Project End Date" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <AutocompleteWidget
                options={projectLocation}
                label="Project Status"
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <AutocompleteWidget
                options={projectLocation}
                label="Project Classification"
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>
            <Grid style={{ marginTop: '0.3rem' }} item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Project Discount"
                InputProps={{
                  endAdornment: <InputAdornment position="end">%</InputAdornment>
                }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <AutocompleteWidget options={projectLocation} label="Salesman" disablePortal autoSelect size="small" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <AutocompleteWidget options={projectLocation} label="Serviceman" disablePortal autoSelect size="small" />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography variant="body2" className="form_sub_title_cls">
                Additional Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label="Special Attention / Notes" size="small" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label="Scope of Project" size="small" />
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
                buttonLabel="Upload Project (pdf)"
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
                  <Typography variant="body2" className="form_sub_title_cls">
                    Ax Default Fields
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
          <Typography variant="body2" className="form_sub_title_cls">
            Service Frequency Settings
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent options={serviceFrequencySettings} onChange={handleChangeServiceFrequencySetting} />
              <Grid style={{ marginTop: '0.3rem' }} item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Recur every"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Day(s)</InputAdornment>
                  }}
                  type="number"
                  size="small"
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body2" style={{ textDecoration: 'underline' }}>
                Service Recurrence
              </Typography>
              <Grid item xs={12} sm={12} className="service_invoice_recurrence_cls" />
            </Grid>
          </Grid>

          <Grid style={{ marginTop: '0.1rem' }} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="body2"
                style={{
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}
              >
                Invoice Recipient & frequency Settings
              </Typography>
              <RadioGroupComponent
                title="Invoice Recipient"
                options={invoiceRecipient}
                onChange={handleChangeInvoiceRecipient}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body2" style={{ textDecoration: 'underline' }}>
                Invoice Recurrence
              </Typography>
              <Grid item xs={12} sm={12} className="service_invoice_recurrence_cls" />
            </Grid>
          </Grid>

          <Grid style={{ marginTop: '0.2rem' }} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <RadioGroupComponent
                title="Invoice Frequency"
                options={invoiceFrequency}
                onChange={handleChangeInvoiceRecipient}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Recur every"
                InputProps={{
                  endAdornment: <InputAdornment position="end">Day(s)</InputAdornment>
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
                  endAdornment: <InputAdornment position="start">SAR</InputAdornment>
                }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="body2" style={{ textDecoration: 'underline' }}>
                Signatory Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <AutocompleteWidget
                options={projectLocation}
                label="Select Various Roles"
                disablePortal
                autoSelect
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Position" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Address" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Phone No." size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Fax No." size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Mobile No." size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="e-mail ID" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Note" size="small" />
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
                buttonLabel="Agreement / LPO No."
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
                  <Typography variant="body2" className="form_sub_title_cls">
                    Financial Dimensions
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
            <Button variant="contained" color="secondary">
              Back
            </Button>
            <Button variant="contained" style={{ marginLeft: '1rem' }}>
              Save
            </Button>
            <Button style={{ marginLeft: '1rem' }} variant="contained" color="warning">
              Terminate Project
            </Button>
            <Button style={{ marginLeft: '1rem' }} variant="contained" color="secondary">
              Renew
            </Button>
          </Grid>
        </Grid>

        <Grid rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
          <ProjectTable />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectCreation;
