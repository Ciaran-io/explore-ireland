let cycleLocationsMap;
let trailLocationsMap;
let touristLocationsMap;
let mapStyle = [
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#004060',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#00557f',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#d3eaf6',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#006699',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [
      {
        color: '#bfe3f5',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a1e0e8',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#9bd0ea',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#abeab2',
      },
    ],
  },
  {
    featureType: 'poi.school',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#9bd0ea',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffb884',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#f38e43',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#f38e43',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ea6400',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#dff4ff',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#006699',
      },
    ],
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#9bd0ea',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#006699',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
];
//  fuction call for google maps initiation
function initMap() {
  cycleLocationsMap = new google.maps.Map(document.getElementById('map-1'), {
    zoom: 6,
    center: new google.maps.LatLng(53.1424, -6.266155),
    styles: mapStyle,
  });
  // loop through cyclingLocationData array & stores object data in variables, then passes data to map markers
  for (let x in cyclingLocationData) {
    let trail = cyclingLocationData[x];
    let location = new google.maps.LatLng(trail.lat, trail.lng);
    addMarker(cycleLocationsMap, trail.name, trail.county, location);
  }

  trailLocationsMap = new google.maps.Map(document.getElementById('map-2'), {
    zoom: 6,
    center: new google.maps.LatLng(53.1424, -6.266155),
    styles: mapStyle,
  });
  // loop through trailLocationData array & stores object data in variables, then passes data to map markers
  for (let x in trailLocationData) {
    let trail = trailLocationData[x];
    let location = new google.maps.LatLng(trail.lat, trail.lng);
    addMarker(trailLocationsMap, trail.name, trail.county, location);
  }
  touristLocationsMap = new google.maps.Map(document.getElementById('map-3'), {
    zoom: 6,
    center: new google.maps.LatLng(53.1424, -6.266155),
    styles: mapStyle,
  });
  // loop through cyclingLocationData array & stores object data in variables, then passes data to map markers
  for (let x in touristLocationData) {
    let trail = touristLocationData[x];
    let location = new google.maps.LatLng(trail.lat, trail.lng);
    addMarker(touristLocationsMap, trail.name, trail.county, location);
  }
}

// Add markers to cycle location map
addMarker = (cycleLocationsMap, name, county, location) => {
  let marker = new google.maps.Marker({
    position: location,
    map: cycleLocationsMap,
  });
  let infowindow = new google.maps.InfoWindow({
    content: `<h1>${name} <br> County. ${county}</h1>`,
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(cycleLocationsMap, marker);
  });
};

// Add markers to trails location map
addMarker = (trailLocationsMap, name, county, location) => {
  let marker = new google.maps.Marker({
    position: location,
    map: trailLocationsMap,
  });
  let infowindow = new google.maps.InfoWindow({
    content: `<h1>${name} <br> County. ${county}</h1>`,
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(trailLocationsMap, marker);
  });
};
// Add markers to tourist location map
addMarker = (touristLocationsMap, name, county, location) => {
  let marker = new google.maps.Marker({
    position: location,
    map: touristLocationsMap,
  });
  let infowindow = new google.maps.InfoWindow({
    content: `<h1>${name} <br> County. ${county}</h1>`,
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(touristLocationsMap, marker);
  });
};
