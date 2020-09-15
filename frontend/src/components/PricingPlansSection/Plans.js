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
    <Grid container spacing={0}>
      <Grid item xs={12} md={12} className="text-center">
        <Card className="card first-card">
          <h2 className="title text-primary">
            Free Account
          </h2>
          <CardContent className="content">
            <h5 className="content-title">
              Pay as you go submissions
            </h5>
            <p className="content-text">
              Pay as you go submissions. Submission costs are subject to different pricing based on categories, but range from <span>$1</span> to <span>$29</span>.
            </p>
            <Button
              color="primary"
              variant="contained"
              className="button-free-account"
              component={Link}
              to="/Register">
                <span>Get Free Accoutn Now</span>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <h2 className="title text-primary">
            Pro Account
          </h2>
          <CardContent className="content">
            <h5 className="content-title">
              Pay anually for unlimited submissions
            </h5>
            <p className="content-text">
              Pay annually to view unlimited customer submissions for a one time charge. Includes Business Vetting Service.
              <a href="/pricing-plan-vendor" className="know-more"><span>i</span>Know more</a>
            </p>
            <Button
              color="primary"
              variant="outlined"
              className="button-pro"
              component={Link}
              to="/Register">
                <span>
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
