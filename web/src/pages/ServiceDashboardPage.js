import { useEffect, useState } from 'react';
import { isArray } from 'lodash';
import { Grid, Stack, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ServiceBoard from '../components/ServiceBoard/ServiceBoard';
import ServiceMens from '../components/ServiceBoard/ServiceMens';
import ServiceTypes from '../components/ServiceBoard/ServiceTypes';
import { serviceData } from '../components/ServiceBoard/data';

import { MAX_LANES, GROUP_BY } from '../utils/constants';

import '../components/ServiceBoard/ServiceBoard.css';

export default function ServiceDashboard() {
  const { SERVICE_MEN, CUSTOMER } = GROUP_BY;
  const serviceDataLen = serviceData.length;
  const [start, setStart] = useState(0);
  const [data, setData] = useState([]);
  const [groupBy, setGroupBy] = useState(SERVICE_MEN);

  const checkValidUpdateForStart = (value) => {
    switch (true) {
      case value < 0:
        return 0;
      case value > serviceDataLen - MAX_LANES:
        return serviceDataLen - MAX_LANES;
      default:
        return value;
    }
  };

  const handleNextDay = () => {
    setStart(checkValidUpdateForStart(start + 1));
  };

  const handlePrevDay = () => {
    setStart(checkValidUpdateForStart(start - 1));
  };

  const handleNextWeek = () => {
    setStart(checkValidUpdateForStart(start + MAX_LANES));
  };

  const handlePrevWeek = () => {
    setStart(checkValidUpdateForStart(start - MAX_LANES));
  };

  const changeData = () => {
    if (isArray(serviceData)) {
      setData(serviceData.slice(start, MAX_LANES + start));
    }
  };

  useEffect(changeData, [start]);

  const handleGroupByChange = (e) => {
    const val = e.target.value;
    setGroupBy(val);
    alert(`${val} group by is selected`);
  };

  return (
    <Grid container className="service-men-grid">
      <Grid item xs={12} md={2}>
        <Stack>
          <span className="ml-1rm mt-1rm">
            <ArrowBackIosIcon onClick={handlePrevWeek} className={`arr-icn ${start === 0 && 'disabled'}`} />
            <ArrowBackIosIcon onClick={handlePrevWeek} className={`arr-icn ${start === 0 && 'disabled'}`} />
            <ArrowBackIosIcon onClick={handlePrevDay} className={`arr-icn ml-1rm ${start === 0 && 'disabled'}`} />
            <ArrowForwardIosIcon
              onClick={handleNextDay}
              className={`arr-icn mr-1rm ml-1rm ${start > serviceDataLen && 'disabled'}`}
            />
            <ArrowForwardIosIcon
              onClick={handleNextWeek}
              className={`arr-icn ${start > serviceDataLen - start && 'disabled'}`}
            />
            <ArrowForwardIosIcon
              onClick={handleNextWeek}
              className={`arr-icn ${start > serviceDataLen - start && 'disabled'}`}
            />
          </span>
        </Stack>
      </Grid>
      <Grid item xs={12} md={7} />
      <Grid item xs={12} md={3}>
        <RadioGroup
          row
          aria-label="Group By"
          value={groupBy}
          onChange={handleGroupByChange}
          name="group-by"
          className="mt-half-rm"
        >
          <FormControlLabel value={SERVICE_MEN} control={<Radio />} color="secondary" label="Group by Servicemen" />
          <FormControlLabel value={CUSTOMER} control={<Radio />} color="secondary" label="Group by Customer" />
        </RadioGroup>
      </Grid>
      <ServiceBoard data={data} />
      <ServiceMens />
      <ServiceTypes />
    </Grid>
  );
}
