import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  LinearProgress,
  Card,
  CardContent,
} from '@material-ui/core';
import { getTotalResum } from '../../../../utils/analyticsResum';

export default function LivePreview(props) {
  const { numbersPerStation } = props;
  const total = (numbersPerStation && numbersPerStation.total) || null;
  const {totalResum, totalRentCount, totalTopIndex} = getTotalResum(total);
  const topTotalItem = (totalResum && (totalResum.length > 0) && totalResum[totalTopIndex]) || null;
  const topTotalPercentage = topTotalItem && parseInt((topTotalItem.rental_count / totalRentCount * 100).toFixed(0));

  var renderItems = [];
  for (var i = 0; i < totalResum.length; i ++) {
    var item = totalResum[i];
    var percentage = parseInt((item.rental_count / totalRentCount * 100).toFixed(0));
    renderItems.push(
      <tr key={i}>
        <td>{item.stationSn}</td>
        <td>
          <div className="d-flex align-items-center font-weight-bold text-black">
            {item.rental_count}
          </div>
        </td>
        <td>
        <div className="align-box-row">
          <div className="flex-grow-1">
            <LinearProgress
              color="primary"
              variant="determinate"
              value={percentage}
            />
          </div>
          <div className="text-dark pl-2">{`${percentage}%`}</div>
        </div>
      </td>
      </tr>
    )
  }

  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title font-weight-bold">Number of rent per stations</div>
        </div>
        <CardContent className="p-3">
          <div className="table-responsive">
            <table className="table table-borderless table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th className="text-left">Station</th>
                  <th className="text-left">Number of Rent</th>
                  <th className="text-left">Usage</th>
                </tr>
              </thead>
              <tbody>
                {renderItems}
              </tbody>
            </table>
          </div>
        </CardContent>
        {topTotalItem && 
          <div className="card-footer d-flex justify-content-between">
          <div className="text-dark btn-wrapper--label">
            {`Top usage: `}
            <div className="text-success font-weight-bold btn-wrapper--label">
              {`${topTotalPercentage}%`}
            </div>
          </div>
          <div className="text-dark btn-wrapper--label">
            {`Top numbers: `}
            <div className="text-warning font-weight-bold btn-wrapper--label">
              {topTotalItem.rental_count}
            </div>
          </div>
          <div className="text-dark btn-wrapper--label">
            {`Station SN: `}
            <div className="text-primary btn-wrapper--label">
              {topTotalItem.stationSn}
            </div>
          </div>
        </div>
        }
      </Card>
    </Fragment>
  );
}
