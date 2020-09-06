import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  LinearProgress,
  Card,
  CardContent,
} from '@material-ui/core';

const averageDurationTitles = {
  avg_0_05: '0 - 30mn',
  avg_05_1: '30mn - 60mn',
  avg_1_2: '1h - 2h',
  avg_2_3: '2h - 3h',
  avg_3_5: '3h - 5h',
  avg_5_48: '5h +',
}

export default function LivePreview(props) {
  const { averageDuration } = props;
  var totalRentCount = 0;
  var renderItems = [];
  if (averageDuration) {
    for (let [key, value] of Object.entries(averageDuration)) {
      console.log(`${key}: ${value}`);
      renderItems.push(
        <tr key={key}>
          <td>{averageDurationTitles[key]}</td>
          <td>
            <div className="d-flex align-items-center font-weight-bold text-black">
              {value.rental_count}
            </div>
          </td>
          <td>
          <div className="align-box-row">
            <div className="flex-grow-1">
              <LinearProgress
                color="primary"
                variant="determinate"
                value={value.percentage}
              />
            </div>
            <div className="text-dark pl-2">{`${value.percentage}%`}</div>
          </div>
        </td>
        </tr>
      )
    }
  }

  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title font-weight-bold">Average rental duration of battery</div>
        </div>
        <CardContent className="p-3">
          <PerfectScrollbar className="scroll-area-sm mb-2">
            <div className="table-responsive">
              <table className="table table-borderless table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-left">Rental Duration</th>
                    <th className="text-left">Number of Rent</th>
                    <th className="text-left">Usage</th>
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
