import React, { Fragment, Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup, Marker, Cluster } from 'react-mapbox-gl';
import { ReactMapboxGlCluster } from 'react-mapbox-gl-cluster';
import { place2GeoJson } from '../../../../../utils/geoJson';
import mapboxConfig, {data} from '../../../../../config/mapbox';
import nonoLogo from '../../../../../assets/images/avatars/logo-nono.png';

const Map = ReactMapboxGl({
  accessToken: mapboxConfig.accessToken
});

const mapProps = {
  style:"mapbox://styles/mapbox/streets-v8",
  containerStyle:{
    height: '80vh',
  },
  center: mapboxConfig.defaultCoordinate,
  zoom: [8]
};


const CustomSpiralComponent = ({ properties, ...restProps }) => {
	const onClick = e => {
		console.log(`Receive event onClick in spiral at properties: ${JSON.stringify(properties)}`);
	};
	return <div style={styles.spiderifierMarkerContent} onClick={onClick}></div>;
};

const CustomeMarkerComponent = ({ properties, className, cssObject }) => {
	const onClick = e => {
		console.log(`Receive event onClick in marker at properties: ${JSON.stringify(properties)}`);
	};
	return <div className={className} style={cssObject} onClick={onClick} />;
};

class LivePreview extends Component {
  clusterMarker = (coordinates, pointCount) => {
    console.log('====== clusterMarker: pointCount: ', pointCount);
    return (
      <Marker coordinates={coordinates} style={styles.clusterMarker} key={'cluster-marker'}>
        <div styles={styles.clusterTitle}>
          <div className="d-flex align-items-center font-weight-bold text-white">
            {pointCount}
          </div>
        </div>
      </Marker>
    )
  };

  renderMarkers = (places) => {
    var res = [];
    for (var i = 0; i < places.length; i++) {
      var place = places[i];
      if (place.stations && (place.stations.length > 0)){
        res.push(
          <Marker
            key={i}
            style={styles.marker}
            coordinates={[place.longitude, place.latitude]}
            // anchor="bottom"
            onClick={() => this.onMarkerClick(place)}
          >
            <div className="avatar-icon-wrapper avatar-icon-md">
              <div className="avatar-icon rounded">
                <img src={nonoLogo} alt="..." />
              </div>
            </div>
          </Marker>
        );
      }
    }
    return res;
  }

  onMarkerClick = (place) => {
    console.log('==== click place');
  }

  // onStyleLoader = () => {
  //   console.log('===== onStyleLoader');
  // }

  getEventHandlers() {
		return {
			onClick: (properties, coords, offset) =>
				console.log(`Receive event onClick at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
			onMouseEnter: (properties, coords, offset) =>
				console.log(`Receive event onMouseEnter at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
			onMouseLeave: (properties, coords, offset) =>
				console.log(`Receive event onMouseLeave at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
			onClusterClick: (properties, coords, offset) =>
				console.log(`Receive event onClusterClick at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
			onClusterMouseEnter: (properties, coords, offset) =>
				console.log(
					`Receive event onClusterMouseEnter at properties: ${properties}, coords: ${coords}, offset: ${offset}`
				),
			onClusterMouseLeave: (properties, coords, offset) =>
				console.log(
					`Receive event onClusterMouseLeave at properties: ${properties}, coords: ${coords}, offset: ${offset}`
				)
		};
	}

  renderMapGl= () => {
    const { stations, places } = this.props;
    const placeMarkers = this.renderMarkers(places);
    return (
      <Map {...mapProps} onStyleLoad={this.onStyleLoad}> 
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "Google_Maps_pin" }}
        >
        </Layer>
        <Layer
          type="symbol"
          id="cluster-count"
          layout={{ 
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
          }}
        ></Layer> 
        { (placeMarkers && (placeMarkers.length > 0)) &&
          <Cluster ClusterMarkerFactory={this.clusterMarker} key={'cluster'}>
            {placeMarkers}
          </Cluster>
        }
      </Map>
    );
  }

  renderMapGlCluster = () => {
    const { stations, places } = this.props;
    const geoJson = place2GeoJson(places);
    console.log('===== geoJson: ', geoJson);
    const tmpData = {
      type: "FeatureCollection", 
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [2.255631, 48.884651]
          },
          properties: {}
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [2.25816, 48.886054]
          },
          properties: {}
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [2.25837, 48.884817]
          },
          properties: {}
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [2.253927, 48.883692]
          },
          properties: {}
        },
      ]
    }
    console.log('====== tmpData: ', tmpData);
    return (
      <Map {...mapProps} onStyleLoad={this.onStyleLoad}>
        {/* {(geoJson && (geoJson.length > 0)) && <ReactMapboxGlCluster data={geoJson} {...this.getEventHandlers()} />} */}
        <ReactMapboxGlCluster
						data={data}
						{...this.getEventHandlers()}
						spiralComponent={CustomSpiralComponent}
            markerComponent={CustomeMarkerComponent}
            key={'ReactMapboxGlCluster'}
					/>
      </Map>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderMapGl()}
      </Fragment>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  clusterMarker: {
    width: '35px',
    height: '35px',
    borderRadius: '25px',
    backgroundColor: '#35cdfa',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.23,
    shadowRadius: 4.62,
    elevation: 8,
    textAlign: 'center'
  },
  clusterTitle: {
    // color: "#FFFFFF",
    // fontSize: 17,
    // fontWeight: '500',
    marginTop: 10,
    marginLeft: 10
  },
  marker: {
    width: 20,
    height: 20
  },
  spiderifierMarkerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(195, 38, 94)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: '1px',
    borderRadius: '50%',
    marginLeft: '-14px',
    marginTop: '-14px',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.29)',
    fontSize: '8px',
    fontWeight: 'bold',
    textAlign: 'center',
    border: '1px solid',
  }
  
};

export default LivePreview;