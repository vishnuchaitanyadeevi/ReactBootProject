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
import React, { Fragment, useState, useCallback } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ArrowRight, ArrowLeft } from '@mui/icons-material/';
import ProjectTable from '../../components/contracts/projectTable';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import UploadFile from '../../components/UploadFile';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import './ContractsCreation.scss';

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

  // handle remove selcted file
  const handleRemove = (file) => {
    const filteredItems = multipleImages.images.filter((_file) => _file !== file);
    setMultipleImages({ ...multipleImages, images: filteredItems });
  };
  return (
    <Grid container spacing={3} padding={3}>
      <Grid container rowSpacing={2} columnSpacing={1} item xs={12} lg={6}>
        <h2>Customer Details</h2>
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
      <Grid container rowSpacing={2} columnSpacing={1} item xs={12} lg={6}>
        <h2>Contract Details</h2>
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
      <Grid container rowSpacing={2} columnSpacing={1} item xs={12} lg={6}>
        <h2>Signatory Information</h2>
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
        <h2>Additional Information</h2>
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
            startIcon={<PhotoCamera />}
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
            <h2>AX Default Fields</h2>
          </AccordionSummary>
        </Accordion>
        <Grid item xs={12} xl={6} md={6} />
        <Grid item xs={12} xl={8} md={8}>
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
                  <AutocompleteWidget options={fundingTypeArr} size="small" label="Fund Type" defaultValue="Customer" />
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Grid>
        <Grid item xs={12} xl={4} md={4} hidden={!(axDefaultexpanded === 'panel1' || axDefaultexpanded === true)}>
          <Accordion fullWidth>
            <AccordionSummary expandIcon={<ArrowRight />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>Financial Dimensions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography> Lorem ipsum. </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
        <Stack direction="row" spacing={2}>
          <Button color="secondary" variant="contained">
            Back
          </Button>
          <Button variant="contained">Save</Button>
          <Button color="warning" variant="contained">
            Complete Contract
          </Button>
        </Stack>
      </Grid>
      <Grid rowSpacing={1} columnSpacing={1} item xs={12} lg={12} justifyContent="center">
        <ProjectTable />
      </Grid>
    </Grid>
  );
}
