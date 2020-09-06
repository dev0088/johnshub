import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardContent,
} from '@material-ui/core';

export default function LivePreview(props) {
  const { places } = props;
  var renderItems = [];
  if (places) {
    for (let [key, value] of Object.entries(places)) {
      renderItems.push(
        <tr key={key}>
          <td className="text-center">{key}</td>
          <td>{value.title}</td>
          <td>
            <div className="d-flex align-items-start">
              <img 
                alt="..."
                className="app-logo-img mr-2 rounded"
                src={value.image}
                styles={{width: 35, height: 35}}
              />
              <div>
                <div className="font-weight-bold text-black">
                  {value.address}
                </div>
                <span className="text-black-50 d-block">
                  {value.description}
                </span>
                <span className="text-black-50 d-block">
                  {value.coordinate ? `lat: ${value.coordinate.latitude}, lon:${value.coordinate.latitude}` : ''}
                </span>
                <span className="text-black-50 d-block">
                  {value.phone}
                </span>
                <span className="text-black-50 d-block">
                  {value.web}
                </span>
              </div>
            </div>
          </td>
          <td>
            {(value.stations.length > 0) ? value.stations[0] : ''}
          </td>
          <td className="text-right">
            {value.slots ? value.slots : ''}
          </td>
        </tr>
      )
    }
  }

  return (
    <Fragment>
      <Card className="card-box mb-4 overflow-visible">
        <div className="card-header pr-2">
          <div className="card-header--title font-weight-bold">All places</div>
        </div>
        <CardContent className="p-3">
          <PerfectScrollbar >
            <div className="table-responsive">
              <table className="table table-borderless table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-left">Title</th>
                    <th className="text-left">Address</th>
                    <th className="text-left">Station SN</th>
                    <th className="text-right">Slots</th>
                  </tr>
                </thead>
                <tbody>
                  {renderItems}
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </Fragment>
  );
}
