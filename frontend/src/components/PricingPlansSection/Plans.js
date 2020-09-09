import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core';

const Plans = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} className="text-center">
        <Card className="card-box card-box-border-bottom border-primary mb-4">
          <h2 className="pricing-plan-title text-primary">
            Free Account
          </h2>
          <CardContent className="pricing-plan-card-content p-3">
            <h5 className="pricing-plan-sub-title">
              Pay as you go submissions
            </h5>
            <p className="pricing-plan-text">
              Pay as you go submissions. Submission costs are subject to different pricing based on categories, but range from <span>$1</span> to <span>$29</span>.
            </p>
            <Button
              color="primary"
              variant="contained"
              className="pricing-one-btn pricing-button"
              component={Link}
              to="/Register">
                <span className="btn-wrapper--label font-weight-bold pricing-button-label">Get Free Accoutn Now</span>
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} className="text-center">
        <Card className="card-box card-box-border-bottom border-primary mb-4">
          <h2 className="pricing-plan-title text-primary">
            Pro Account
          </h2>
          <CardContent className="pricing-plan-card-content p-3">
            <h5 className="pricing-plan-sub-title">
              Pay anually for unlimited submissions
            </h5>
            <p className="pricing-plan-text">
              Pay annually to view unlimited customer submissions for a one time charge. Includes Business Vetting Service.
              <a href="/pricing-plan-vendor" className="know-more"><span>i</span>Know more</a>
            </p>
            <Button
              color="primary"
              variant="outlined"
              className="pricing-button"
              component={Link}
              to="/Register">
                <span className="btn-wrapper--label font-weight-bold pricing-button-label">
                  Get Pro Now
                </span>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Plans;
