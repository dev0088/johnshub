import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  LinearProgress,
  Card,
  CardContent,
} from '@material-ui/core';
import { getCommonResum } from '../../../../utils/analyticsResum';

export default function LivePreview(props) {
  const { usagePerStationType } = props;
  const total = (usagePerStationType && usagePerStationType.total) || null;
  const {resum, totalCount, topIndex} = getCommonResum(total, 'slot_total', 'rental_count');
  const topItem = (resum && (resum.length > 0) && resum[topIndex]) || null;
  const topPercentage = topItem && parseInt((topItem.rental_count / totalCount * 100).toFixed(0));

  var renderItems = [];
  for (var i = 0; i < resum.length; i ++) {
    var item = resum[i];
    var percentage = parseInt((item.rental_count / totalCount * 100).toFixed(0));
    renderItems.push(
      <tr key={i}>
        <td>{`${item.slot_total} slots`}</td>
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
          <div className="card-header--title font-weight-bold">Usage per type of stations </div>
        </div>
        <CardContent className="p-3">
          <PerfectScrollbar className="scroll-area-sm mb-2">
            <div className="table-responsive">
              <table className="table table-borderless table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-left">Station Type</th>
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
        {topItem && 
          <div className="card-footer d-flex justify-content-between">
            <div className="text-dark btn-wrapper--label">
              {`Top usage: `}
              <div className="text-success font-weight-bold btn-wrapper--label">
                {`${topPercentage}%`}
              </div>
            </div>
            <div className="text-dark btn-wrapper--label">
              {`Top numbers: `}
              <div className="text-warning font-weight-bold btn-wrapper--label">
                {topItem.rental_count}
              </div>
            </div>
            <div className="text-dark btn-wrapper--label">
              {`Station type: `}
              <div className="text-primary btn-wrapper--label">
                {`${topItem.slot_total} slots`}
              </div>
            </div>
          </div>
        }
      </Card>
    </Fragment>
  );
}
