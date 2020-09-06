import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

export default function LivePreview(props) {
  const { places, stations } = props;
  const totalStations = (stations && stations.length) || 0;
  const totalPlaces = (places && places.length) || 0;
  var totalAssociatedStations = 0;
  
  if (places){
    for (var i = 0; i < totalPlaces; i ++) {
      const place = places[i];
      if (place.stations && (place.stations.length >= 1))
        totalAssociatedStations ++;
    }
  }

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={6}>
          <Card className="card-box border-0 card-shadow-first p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-first text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <div className="text-black-50">Total</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="font-size-sm text-danger mr-2"
              />
              <div>{totalStations || 0}</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+36%</b> from last month
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Card className="card-box border-0 card-shadow-success p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-success text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'file-excel']} />
              </div>
              <div className="text-black-50">Associated Stations</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['far', 'dot-circle']}
                className="font-size-sm text-warning mr-2"
              />
              <div>{totalAssociatedStations}</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+65%</b> from last month
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
