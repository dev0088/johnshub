import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  LinearProgress,
  Card,
  CardContent,
} from '@material-ui/core';
import {
  getMonthName,
  getDatesFromWeek
} from '../../../../utils/datetimeUtils';
import {
  getMonthlyResumByStationType,
  getWeeklyResumByStationType
} from '../../../../utils/analyticsResum';

export default function LivePreview(props) {
  const { usagePerStationType } = props;
  const monthly = (usagePerStationType && usagePerStationType.monthly) || null;
  const weekly = (usagePerStationType && usagePerStationType.weekly) || null;
  
  var renderMonthlyItems = [];
  var renderWeeklyItems = [];

  const {monthlyResum, monthlyTotalRentCount, monthlyTopIndex} = getMonthlyResumByStationType(monthly);
  const {weeklyResum, weeklyTopIndex} = getWeeklyResumByStationType(weekly);

  const totalRentCount = monthlyTotalRentCount;
  const topMonthlyItem = (monthlyResum && (monthlyResum.length > 0) && monthlyResum[monthlyTopIndex]) || null;
  const topMonthlyPercentage = topMonthlyItem && parseInt((topMonthlyItem.rental_count / totalRentCount * 100).toFixed(0));
  const topWeeklyItem = (weeklyResum && (weeklyResum.length > 0) && weeklyResum[weeklyTopIndex]) || null;
  const topWeeklyPercentage = topWeeklyItem && parseInt((topWeeklyItem.rental_count / totalRentCount * 100).toFixed(0));

  // Render monthly table
  for (var i = 0; i < monthlyResum.length; i ++) {
    var item = monthlyResum[i];
    var percentage = parseInt((item.rental_count / totalRentCount * 100).toFixed(0));
    renderMonthlyItems.push(
      <tr key={i}>
        <td>{`${getMonthName(item.created_at__month - 1)}, 2020`}</td>
        <td>
          <div className="text-dark btn-wrapper--label">
            <div className="text-primary font-weight-bold btn-wrapper--label">
              {item.slot_total}
            </div>
            <div className="text-dark btn-wrapper--label">
              slots
            </div>
          </div>
        </td>
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
  // Render weekly table
  for (var i = 0; i < weeklyResum.length; i ++) {
    var item = weeklyResum[i];
    var percentage = parseInt((item.rental_count / totalRentCount * 100).toFixed(0));
    renderWeeklyItems.push(
      <tr key={i}>
        <td>{`${item.created_at__week}rd`}</td>
        <td>{`${getDatesFromWeek(item.created_at__week)} - ${getDatesFromWeek(item.created_at__week + 1)}`}</td>
        <td>
          <div className="text-dark btn-wrapper--label">
            <div className="text-primary font-weight-bold btn-wrapper--label">
              {item.slot_total}
            </div>
            <div className="text-dark btn-wrapper--label">
              slots
            </div>
          </div>
        </td>
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
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title font-weight-bold">
                Monthly usage
              </div>
            </div>
            <CardContent className="p-3">
              <PerfectScrollbar className="scroll-area-sm mb-2">
                <div className="table-responsive">
                  <table className="text-nowrap mb-0 table table-borderless table-hover">
                    <thead>
                      <tr>
                        <th style={{ width: 150 }}>Month</th>
                        <th>Station type</th>
                        <th>Number of rent</th>
                        <th>% Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderMonthlyItems}
                    </tbody>
                  </table>
                </div>
              </PerfectScrollbar>
            </CardContent>
            {topMonthlyItem && 
              <div className="card-footer d-flex justify-content-between">
              <div className="text-dark btn-wrapper--label">
                {`Top usage: `}
                <div className="text-success font-weight-bold btn-wrapper--label">
                  {`${topMonthlyPercentage}%`}
                </div>
              </div>
              <div className="text-dark btn-wrapper--label">
                {`Top numbers: `}
                <div className="text-warning font-weight-bold btn-wrapper--label">
                  {topMonthlyItem.rental_count}
                </div>
              </div>
              <div className="text-dark btn-wrapper--label">
                {`Station type: `}
                <div className="text-primary font-weight-bold btn-wrapper--label">
                  {topMonthlyItem.slot_total}
                </div>
                <div className="text-dark btn-wrapper--label">
                  slots
                </div>
              </div>
              <div className="text-dark btn-wrapper--label">
                {`Due date: `}
                <div className="text-primary btn-wrapper--label">
                  {`${getMonthName(topMonthlyItem.created_at__month - 1)}, 2020`}
                </div>
              </div>
            </div>
            }
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title font-weight-bold">
                Weekly usage
              </div>
            </div>
            <CardContent className="p-3">
              <PerfectScrollbar className="scroll-area-sm mb-2">
              <div className="table-responsive">
                <table className="text-nowrap mb-0 table table-borderless table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: 150 }}>Week</th>
                      <th>Due Date</th>
                      <th>Station type</th>
                      <th>Number Of Rent</th>
                      <th>% Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderWeeklyItems}
                  </tbody>
                </table>
              </div>
            </PerfectScrollbar>
            </CardContent>
            {topWeeklyItem && 
            <div className="card-footer d-flex justify-content-between">
              <div className="text-dark btn-wrapper--label">
                {`Top usage: `}
                <div className="text-success font-weight-bold btn-wrapper--label">
                  {`${topWeeklyPercentage}%`}
                </div>
              </div>
              <div className="text-dark btn-wrapper--label">
                {`Top numbers: `}
                <div className="text-warning font-weight-bold btn-wrapper--label">
                  {topWeeklyItem.rental_count}
                </div>
              </div>
              <div className="text-dark btn-wrapper--label">
                {`Due date: `}
                <div className="text-primary btn-wrapper--label">
                  {`${getDatesFromWeek(topWeeklyItem.created_at__week)} - ${getDatesFromWeek(topWeeklyItem.created_at__week + 1)}`}
                </div>
              </div>
            </div>
            }
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
