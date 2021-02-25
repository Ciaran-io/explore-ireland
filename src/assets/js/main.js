// cycle trail location array
const cyclingLocationData = [
  {
    name: 'Achill Cycle Hub',
    county: 'Mayo',
    lat: 53.97610111,
    lng: -10.08038879,
  },
  {
    name: 'Ballintotis-Castlepook Loop',
    county: 'Cork',
    lat: 51.911149,
    lng: -8.092401,
  },
  {
    name: 'Beara Way Cycling Route',
    county: 'Cork',
    lat: 51.75020745,
    lng: -9.549238756,
  },
  {
    name: 'Clifden Cycle Hub',
    county: 'Galway',
    lat: 53.48742769,
    lng: -10.01909941,
  },
  {
    name: 'Donegal Cycle Route',
    county: 'Donegal',
    lat: 54.652177,
    lng: -8.111556,
  },
  {
    name: 'Doolin Cycle Hub',
    county: 'Clare',
    lat: 53.00525867,
    lng: -9.388025676,
  },
  {
    name: 'East Kilkenny Cycle Route',
    county: 'Kilkenny',
    lat: 52.649863,
    lng: -7.249158,
  },
  {
    name: "Lough O'Flynn Cycle Route",
    county: 'Roscommon',
    lat: 53.741832,
    lng: -8.633925,
  },
  {
    name: 'Mullingar Cycle Hub',
    county: 'Westmeath',
    lat: 53.522007,
    lng: -7.34634,
  },
  {
    name: 'North Kilkenny Cycle Loop',
    county: 'Kilkenny',
    lat: 52.649863,
    lng: -7.249158,
  },
];
// trail location array
const trailLocationData = [
  {
    name: "12 O'Clock Hills Looped Walks",
    county: 'Clare',
    lat: 52.790565,
    lng: -8.707793,
  },
  {
    name: 'Abbeyleix Loops - Collins Bog loop',
    county: 'Laois',
    lat: 52.907005,
    lng: -7.351705,
  },
  {
    name: 'Arklow Loops Kynoch Walk',
    county: 'Wicklow',
    lat: 52.799941,
    lng: -6.144013,
  },
  {
    name: 'Avondale Forest Park - Centenary Trail',
    county: 'Wicklow',
    lat: 52.913267,
    lng: -6.2233674,
  },
  { name: 'Ballybeg loop', county: 'Limrick', lat: 52.672069, lng: -6.4790826 },
  {
    name: 'Ballyhoura - Black Rock loop',
    county: 'Limerick',
    lat: 52.31687,
    lng: -8.50286,
  },
  {
    name: 'Bere Island - Doonbeg loop',
    county: 'Cork',
    lat: 51.63054,
    lng: -9.861676,
  },
  {
    name: 'Cailleach Beara Loop - Bonane Beara',
    county: 'Kerry',
    lat: 51.8006767,
    lng: -9.5620704,
  },
  { name: 'Aghacashel Loop', county: 'Leitrim', lat: 54.070443, lng: -7.93115 },
  {
    name: 'Cloonfad River Walk',
    county: 'Roscommon',
    lat: 53.6734976,
    lng: -8.7054237,
  },
];
// tourist trail location array
const touristLocationData = [
  {
    name: 'The Cliffs of Moher',
    county: 'Galway',
    lat: 52.97337082215161,
    lng: -9.430152860068445,
  },
  {
    name: 'Grafton Street, Dublin',
    county: 'Dublin',
    lat: 53.341515,
    lng: -6.260263,
  },
  {
    name: 'Killarney National Park',
    county: 'Kerry',
    lat: 52.0058447,
    lng: -9.5572746,
  },
  {
    name: 'The Book of Kells and Trinity College, Dublin',
    county: 'Dublin',
    lat: 53.34410261808577,
    lng: -6.256718644093022,
  },
  {
    name: 'Kilmainham Gaol, Dublin',
    county: 'Dublin',
    lat: 53.34201100149998,
    lng: -6.3098369881113,
  },
  {
    name: 'The Ring of Kerry',
    county: 'Kerry',
    lat: 51.86952476957305,
    lng: -10.380561643979789,
  },
  {
    name: 'Powerscourt House & Gardens',
    county: 'Wicklow',
    lat: 53.18395125846585,
    lng: -6.186437031247479,
  },
  {
    name: 'The Little Museum of Dublin',
    county: 'Ducblin',
    lat: 53.33974009725549,
    lng: -6.258304543934928,
  },
  {
    name: 'Rock of Cashel',
    county: 'Tipperry',
    lat: 52.52025907235543,
    lng: -7.890452201628294,
  },
  {
    name: 'Kinsale',
    county: 'Cork',
    lat: 51.70646253761719,
    lng: -8.522111609695378,
  },
];

const sectionCyclingContainer = document.getElementById('cycle-locations-section');
const sectionTrailContainer = document.getElementById('trail-locations-section');
const sectionTouringContainer = document.getElementById('tourist-locations-section');
const locationListLi = document.querySelectorAll('li.location-list-items');
const cycleListLi = document.querySelectorAll('#cycle-location-list > li');
const cycleDiscoverButton = document.getElementById('button-cycle-locations');
const trailDiscoverButton = document.getElementById('button-trail-locations');
const touristDiscoverButton = document.getElementById('button-tourist-locations');

let locationHeading;
let locationHeadingText;
let findOutMoreButton;
let findOutMoreButtonText;
let locationCounty;
let locationCountyText;

//  Function iterates through the location list elemenets & creates a h1,h2 & button element in each list
// then adds classes and appends the new elements to the DOM
locationListLi.forEach((li) => {
  locationHeading = document.createElement('h1');
  locationHeadingText = document.createTextNode('');
  locationHeading.append(locationHeadingText);
  locationHeading.classList.add('list-heading');

  locationCounty = document.createElement('h2');
  locationCountyText = document.createTextNode('County ');
  locationCounty.append(locationCountyText);
  locationCounty.classList.add('list-heading', 'hidden');

  findOutMoreButton = document.createElement('button');
  findOutMoreButtonText = document.createTextNode('Find out more');
  findOutMoreButton.appendChild(findOutMoreButtonText);
  findOutMoreButton.classList.add('button-location-section');

  li.append(locationHeading, locationCounty, findOutMoreButton);
});

// This function is called when the user clicks on the ul element inside the cycle,trail & tourist section
showListItemData = () => {
  locationListLi.forEach((li) => {
    li.classList.toggle('location-li-active'); //toggles class
  });
  // Changes class of heading2 element
  let locationCountyHeading = document.querySelectorAll('.location-list-items h2.list-heading');
  locationCountyHeading.forEach((h2) => {
    h2.classList.toggle('hidden'); //toggles class
  });
  // Changes the inner HTML of the button when the user clicks on button
  let displayDataButton = document.querySelectorAll('button.button-location-section');
  displayDataButton.forEach((button) => {
    if (button.innerHTML == 'Find out more') {
      button.innerHTML = 'Show less';
    } else {
      button.innerHTML = 'Find out more';
    }
  });
};

// Varaible for all h1 & h2 elements cycle trail list
let cyclingLocationListHeading = document.querySelectorAll('#cycle-location-list h1.list-heading');
let cyclingLocationSubListHeading = document.querySelectorAll(
  '#cycle-location-list h2.list-heading'
);

cyclingLocationListHeading[0].innerHTML = cyclingLocationData[0].name;
cyclingLocationListHeading[1].innerHTML = cyclingLocationData[1].name;
cyclingLocationListHeading[2].innerHTML = cyclingLocationData[2].name;
cyclingLocationListHeading[3].innerHTML = cyclingLocationData[3].name;
cyclingLocationListHeading[4].innerHTML = cyclingLocationData[4].name;
cyclingLocationListHeading[5].innerHTML = cyclingLocationData[5].name;
cyclingLocationListHeading[6].innerHTML = cyclingLocationData[6].name;
cyclingLocationListHeading[7].innerHTML = cyclingLocationData[7].name;
cyclingLocationListHeading[8].innerHTML = cyclingLocationData[8].name;
cyclingLocationListHeading[9].innerHTML = cyclingLocationData[9].name;

cyclingLocationSubListHeading[0].innerHTML += cyclingLocationData[0].county;
cyclingLocationSubListHeading[1].innerHTML += cyclingLocationData[1].county;
cyclingLocationSubListHeading[2].innerHTML += cyclingLocationData[2].county;
cyclingLocationSubListHeading[3].innerHTML += cyclingLocationData[3].county;
cyclingLocationSubListHeading[4].innerHTML += cyclingLocationData[4].county;
cyclingLocationSubListHeading[5].innerHTML += cyclingLocationData[5].county;
cyclingLocationSubListHeading[6].innerHTML += cyclingLocationData[6].county;
cyclingLocationSubListHeading[7].innerHTML += cyclingLocationData[7].county;
cyclingLocationSubListHeading[8].innerHTML += cyclingLocationData[8].county;
cyclingLocationSubListHeading[9].innerHTML += cyclingLocationData[9].county;

// Varaible for all h1 & h2 elements trail trail list
let trailLocationListHeading = document.querySelectorAll('#trail-location-list h1.list-heading');
let trailLocationSubListHeading = document.querySelectorAll('#trail-location-list h2.list-heading');

trailLocationListHeading[0].innerHTML = trailLocationData[0].name;
trailLocationListHeading[1].innerHTML = trailLocationData[1].name;
trailLocationListHeading[2].innerHTML = trailLocationData[2].name;
trailLocationListHeading[3].innerHTML = trailLocationData[3].name;
trailLocationListHeading[4].innerHTML = trailLocationData[4].name;
trailLocationListHeading[5].innerHTML = trailLocationData[5].name;
trailLocationListHeading[6].innerHTML = trailLocationData[6].name;
trailLocationListHeading[7].innerHTML = trailLocationData[7].name;
trailLocationListHeading[8].innerHTML = trailLocationData[8].name;
trailLocationListHeading[9].innerHTML = trailLocationData[9].name;

trailLocationSubListHeading[0].innerHTML += trailLocationData[0].county;
trailLocationSubListHeading[1].innerHTML += trailLocationData[1].county;
trailLocationSubListHeading[2].innerHTML += trailLocationData[2].county;
trailLocationSubListHeading[3].innerHTML += trailLocationData[3].county;
trailLocationSubListHeading[4].innerHTML += trailLocationData[4].county;
trailLocationSubListHeading[5].innerHTML += trailLocationData[5].county;
trailLocationSubListHeading[6].innerHTML += trailLocationData[6].county;
trailLocationSubListHeading[7].innerHTML += trailLocationData[7].county;
trailLocationSubListHeading[8].innerHTML += trailLocationData[8].county;
trailLocationSubListHeading[9].innerHTML += trailLocationData[9].county;

// Varaible for all h1 & h2 elements tourist trail list
let touristLocationListHeading = document.querySelectorAll(
  '#tourist-location-list h1.list-heading'
);
let touristLocationSubListHeading = document.querySelectorAll(
  '#tourist-location-list h2.list-heading'
);

touristLocationListHeading[0].innerHTML = touristLocationData[0].name;
touristLocationListHeading[1].innerHTML = touristLocationData[1].name;
touristLocationListHeading[2].innerHTML = touristLocationData[2].name;
touristLocationListHeading[3].innerHTML = touristLocationData[3].name;
touristLocationListHeading[4].innerHTML = touristLocationData[4].name;
touristLocationListHeading[5].innerHTML = touristLocationData[5].name;
touristLocationListHeading[6].innerHTML = touristLocationData[6].name;
touristLocationListHeading[7].innerHTML = touristLocationData[7].name;
touristLocationListHeading[8].innerHTML = touristLocationData[8].name;
touristLocationListHeading[9].innerHTML = touristLocationData[9].name;

touristLocationSubListHeading[0].innerHTML += touristLocationData[0].county;
touristLocationSubListHeading[1].innerHTML += touristLocationData[1].county;
touristLocationSubListHeading[2].innerHTML += touristLocationData[2].county;
touristLocationSubListHeading[3].innerHTML += touristLocationData[3].county;
touristLocationSubListHeading[4].innerHTML += touristLocationData[4].county;
touristLocationSubListHeading[5].innerHTML += touristLocationData[5].county;
touristLocationSubListHeading[6].innerHTML += touristLocationData[6].county;
touristLocationSubListHeading[7].innerHTML += touristLocationData[7].county;
touristLocationSubListHeading[8].innerHTML += touristLocationData[8].county;
touristLocationSubListHeading[9].innerHTML += touristLocationData[9].county;

// Adds event listner to button elements in location destination cards
// After user input the seleced section will change classes for the button and section seleceted

cycleDiscoverButton.addEventListener('click', () => {
  if (sectionCyclingContainer.style.display == 'block') {
    sectionCyclingContainer.style.display = 'none';
    cycleDiscoverButton.classList.remove('button-active');
  } else {
    sectionCyclingContainer.style.display = 'block';
    sectionTrailContainer.style.display = 'none';
    sectionTouringContainer.style.display = 'none';

    cycleDiscoverButton.classList.add('button-active');
    trailDiscoverButton.classList.remove('button-active');
    touristDiscoverButton.classList.remove('button-active');
  }
});

// Adds event listner to button elements in location destination cards
// After user input the seleced section will change classes for the button and section selected

trailDiscoverButton.addEventListener('click', () => {
  if (sectionTrailContainer.style.display == 'block') {
    sectionTrailContainer.style.display = 'none';
    trailDiscoverButton.classList.remove('button-active');
  } else {
    sectionTrailContainer.style.display = 'block';
    sectionCyclingContainer.style.display = 'none';
    sectionTouringContainer.style.display = 'none';

    trailDiscoverButton.classList.add('button-active');
    cycleDiscoverButton.classList.remove('button-active');
    touristDiscoverButton.classList.remove('button-active');
  }
});

// Adds event listner to button elements in location destination cards
// After user input the seleced section will change classes for the button and section seleceted

touristDiscoverButton.addEventListener('click', () => {
  if (sectionTouringContainer.style.display == 'block') {
    sectionTouringContainer.style.display = 'none';
    touristDiscoverButton.classList.remove('button-active');
  } else {
    sectionTouringContainer.style.display = 'block';
    sectionCyclingContainer.style.display = 'none';
    sectionTrailContainer.style.display = 'none';

    touristDiscoverButton.classList.add('button-active');
    cycleDiscoverButton.classList.remove('button-active');
    trailDiscoverButton.classList.remove('button-active');
  }
});
