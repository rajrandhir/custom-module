import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Grid, Container } from '@mui/material';
import { addDays, subDays } from 'date-fns';
import "../../../assests/styles/Common.css"

const Picker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  return (
    <>
      <Container sx={{marginTop:"3rem"}}>
        <Grid container spacing={3}>
            <Grid item>
            <DatePicker
             selected={startDate}
             onChange={() => setStartDate(startDate)} 
             />
            </Grid>
            <Grid item>
              <DatePicker
              selected={endDate}
                onChange={(date) => setEndDate(date)}
                includeDateIntervals={[
                  {
                    start: subDays(new Date(), 5),
                    end:addDays(new Date(),5)
                  },
                ]}
              />
            </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Picker;
