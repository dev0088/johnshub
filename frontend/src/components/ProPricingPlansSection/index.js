import React, { Fragment } from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  TextField,
} from '@material-ui/core';

const serviceTypes = [
  { category: 'Lawyers / Lawfirms', price: 1800 },
  { category: 'Youth Sports Coaches', price: 250 },
  { category: 'General Contractors', price: 1200 },
  { category: 'Plumbers', price: 250 },
  { category: 'Electricians', price: 250 },
  { category: 'Exterminators', price: 250 },
  { category: 'Painters', price: 250 },
  { category: 'Architects', price: 1200 },
  { category: 'Landscapers', price: 250 },
  { category: 'Heating / AC Repair', price: 250 },
  { category: 'Custom Bus Charters', price: 900 },
  { category: 'Limo Companies', price: 900 },
  { category: 'Realtors (Sell A Home)', price: 1800 },
  { category: 'Realtors (Buy A Home)', price: 250 },
  { category: 'Pool Maintenance', price: 250 },
  { category: 'Pool Equipment / New Pool', price: 1200 },
  { category: 'Website Developers (front end)', price: 250 },
  { category: 'Website Programmers (backend)', price: 900 },
  { category: 'Graphic Designers / Artists', price: 250 },
  { category: 'Graphic Animators', price: 250 },
  { category: 'Roofing', price: 1200 },
  { category: 'Solar (Home / Commercial)', price: 1200 },
  { category: 'Therepists', price: 250 },
  { category: 'Financial Planners', price: 1200 },
  { category: 'Personal Trainers', price: 250 },
  { category: 'Flooring Contractors', price: 250 },
];

const ProPricingPlansSection = () => {
  const [service, setService] = React.useState('');

  const handleChange = event => {
    setService(event.target.value);
  };

  return (
    <Fragment>
      <Container fixed className="pb-4 text-center">
        <Grid container spacing={4}>
          <Grid item xs={12} md={2} />
          <Grid item xs={12} md={8} className="text-center">
            <Card className="card-box card-box-border-bottom border-primary mb-4">
              <h2 className="pricing-plan-title text-primary">
                Pro Pricing Plans
              </h2>
              <CardContent className="pricing-plan-card-content p-3">
                <h5 className="pricing-plan-sub-title">
                  Your location helps us to track and Provide you with the best possible solution in your vicinity
                </h5>

                <Grid container spacing={4}  className="pro-pricing-plan-container">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      className="text-left"
                      id="standard-select-service"
                      select
                      label="Select service"
                      value={service}
                      // variant="outlined"
                      onChange={handleChange}>
                      {serviceTypes.map(service => (
                        <MenuItem key={service.category} value={service.category} className="text-left">
                          {`${service.category}  $${service.price}`}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} className="text-center">
                    <Button
                      // fullWidth
                      color="primary"
                      variant="contained"
                      className="pricing-one-btn pricing-button">
                        <span className="btn-wrapper--label font-weight-bold pricing-button-label">Continue</span>
                    </Button>
                  </Grid>
                  <Grid item xs={12} className="text-center">
                    <p className="text-primary font-size-md">
                      If you don’t see your category, we will create one for you within 48 hour subject to approval. Click here: Suggest Service Category.
                    </p>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} />
        </Grid>
      </Container>
    </Fragment>
  );
};
export default ProPricingPlansSection;
