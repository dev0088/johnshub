export function place2GeoJson(places) {
  var features = [];
  if (places && (places.length > 0)) {
    for (var i = 0; i < places.length; i ++) {
      var place = places[i];
      features.push(
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [place.longitude, place.latitude]
          }
        }
      );
    }
  }

  return {
    type: "FeatureCollection",
    features: features
  };
}