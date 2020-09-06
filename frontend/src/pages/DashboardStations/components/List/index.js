import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardContent,
  Tooltip,
  IconButton
} from '@material-ui/core';

export default function LivePreview(props) {
  const { stations, places, onRefresh, isRefreshing } = props;

  const getPlace = (placeId) => {
    if (!places || (places.length === 0)) return null;
    for (let [key, value] of Object.entries(places)) {
      if(value.id === placeId) return value;
    }
    return null
  }

  const refresh = () => onRefresh && onRefresh();

  var renderItems = [];
  if (stations) {
    for (let [key, value] of Object.entries(stations)) {
      const place = getPlace(value.place);
      
      renderItems.push(
        <tr key={key}>
          <td className="text-center">{key}</td>
          <td>{value.stationSn}</td>
          <td>
            {value.slotTotal}
          </td>
          <td>
            {value.slotStatus}
          </td>
          <td className="text-right">
            {value.isOnline ? (
              <div className="px-4 badge badge-success">Online</div>
            ): (
              <div className="badge badge-danger px-4">Offline</div>
            )}
          </td>
          <td className="text-right">
            {value.status ? (
              <div className="px-4 badge badge-success">Online</div>
            ): (
              <div className="badge badge-danger px-4">Offline</div>
            )}
          </td>
          <td className="text-left">
            {(place && place.address) || ''}
          </td>
        </tr>
      )
    }
  }

  return (
    <Fragment>
      <Card className="card-box mb-4 overflow-visible">
        <div className="card-header pr-2">
          <div className="card-header--title font-weight-bold">All stations</div>
          <div className="card-header--actions">
            <Tooltip arrow title="Refresh">
              <IconButton size="small" color="primary" className="mr-3" onClick={refresh}>
                <FontAwesomeIcon icon={['fas', 'redo']} spin={isRefreshing}/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <CardContent className="p-3">
          <PerfectScrollbar >
            <div className="table-responsive">
              <table className="table table-borderless table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-left">Station SN</th>
                    <th className="text-left">Slots</th>
                    <th className="text-left">Slot Status</th>
                    <th className="text-center">Online</th>
                    <th className="text-center">Status</th>
                    <th className="text-left">Place</th>
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
