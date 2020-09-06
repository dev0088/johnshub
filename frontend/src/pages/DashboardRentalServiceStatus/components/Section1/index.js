import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

export default function LivePreview(props) {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box border-0 card-shadow-first p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-first text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <div className="text-black-50">Rents</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="font-size-sm text-danger mr-2"
              />
              <div>{props.totalRents || 0}</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+36%</b> from last month
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box border-0 card-shadow-success p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-success text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'file-excel']} />
              </div>
              <div className="text-black-50">Stations</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['far', 'dot-circle']}
                className="font-size-sm text-warning mr-2"
              />
              <div>{props.totalStations || 0}</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+65%</b> from last month
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box border-0 card-shadow-danger p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-danger text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div className="text-black-50">Places</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="font-size-sm text-success mr-2"
              />
              <div>{props.totalPlaces}</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+22%</b> from last month
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box border-0 card-shadow-primary p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-primary text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div className="text-black-50">Users</div>
            </div>
            <div className="display-3 text-center line-height-sm text-black-50 text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-down']}
                className="font-size-sm text-first mr-2"
              />
              <div>{props.totalUsers}</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+32%</b> from last month
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}