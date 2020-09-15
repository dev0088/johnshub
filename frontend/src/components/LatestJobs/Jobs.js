import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
} from '@material-ui/core';

const Jobs = (props) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={12} className="text-center">
        <Card className="card">
          {props.jobs.map((job, index) => {
            return (
              <CardContent className={`job-container ${(index < (props.jobs.length - 1)) && "split"}`} key={`latest-jobs-${index}`}>
                <Grid container>
                  <Grid item xs={10} md={11} className="text-left">
                    <div className="job-title">
                      {job.title}
                    </div>
                  </Grid>
                  <Grid item xs={2} md={1} className="text-left">
                    <div className="job-level-title">
                      Title
                    </div>
                  </Grid>
                  <Grid item xs={10} md={11} className="text-left">
                    <div className="job-description">
                      {job.description}
                    </div>
                  </Grid>
                  <Grid item xs={2} md={1} className="text-left">
                    <div className="job-level">
                      {job.level}
                    </div>
                </Grid>
                </Grid>
              </CardContent>
            );
          })}
        </Card>
      </Grid>
    </Grid>
  );
};
export default Jobs;
