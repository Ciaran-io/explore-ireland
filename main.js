const sectionCyclingContainer = document.getElementById("cycle-locations-section");
const sectionTrailContainer = document.getElementById("trail-locations-section");
let locationList = document.querySelectorAll('li');
let cycleLocationList = document.querySelectorAll('.cycle-list')
let locationListContainer = document.querySelectorAll('.locations-list-container');


showListItemData = () => {
  locationList.forEach(li => {
    li.classList.toggle('location-list-items-clicked')
  });

  locationListContainer.forEach(item => {
    item.classList.toggle('locations-list-container-clicked');
  })
}


document.getElementById("button-cycle-locations").addEventListener("click", () => {
  if (sectionCyclingContainer.style.display === "none") {
    sectionCyclingContainer.style.display = "block";
    sectionTrailContainer.style.display = "none";
  } else {
    sectionCyclingContainer.style.display = "none";
  }
});

document.getElementById("button-trails-Locations").addEventListener("click", () => {
  if (sectionTrailContainer.style.display === "none") {
    sectionTrailContainer.style.display = "block";
    sectionCyclingContainer.style.display = "none";
  } else {
    sectionTrailContainer.style.display = "none";
  }
});


let cyclingLocationData = [
  { 'name': 'Achill Cycle Hub', 'lat': 53.97610111, 'lng': -10.08038879 },
  { 'name': 'Ballintotis-Castlepook Loop', 'lat': 51.911149, 'lng': -8.092401 },
  { 'name': 'Beara Way Cycling Route', 'lat': 51.75020745, 'lng': -9.549238756 },
  { 'name': 'Clifden Cycle Hub', 'lat': 53.48742769, 'lng': -10.01909941 },
  { 'name': 'Donegal Cycle Route', 'lat': 54.652177, 'lng': -8.111556 },
  { 'name': 'Doolin Cycle Hub', 'lat': 53.00525867, 'lng': -9.388025676 },
  { 'name': 'East Kilkenny Cycle Route', 'lat': 52.649863, 'lng': -7.249158 },
  { 'name': "Lough O'Flynn Cycle Route", 'lat': 53.741832, 'lng': -8.633925 },
  { 'name': 'Mullingar Cycle Hub', 'lat': 53.522007, 'lng': -7.34634 },
  { 'name': 'North Kilkenny Cycle Loop', 'lat': 52.649863, 'lng': -7.249158 }

];


document.getElementById("achil").innerHTML = cyclingLocationData[0].name;
document.getElementById("ballintotis").innerHTML = cyclingLocationData[1].name;
document.getElementById("baera").innerHTML = cyclingLocationData[2].name;
document.getElementById("clifden").innerHTML = cyclingLocationData[3].name;
document.getElementById("donegal").innerHTML = cyclingLocationData[4].name;
document.getElementById("doolin").innerHTML = cyclingLocationData[5].name;
document.getElementById("eastKilkenny").innerHTML = cyclingLocationData[6].name;
document.getElementById("lough").innerHTML = cyclingLocationData[7].name;
document.getElementById("mullingar").innerHTML = cyclingLocationData[8].name;
document.getElementById("northKilkenny").innerHTML = cyclingLocationData[9].name;


let trailLocationData = [
  { 'name': "12 O'Clock Hills Looped Walks", 'lat': 52.790565, 'lng': -8.707793 },
  { 'name': 'Abbeyleix Loops - Collins Bog loop', 'lat': 52.907005, 'lng': -7.351705 },
  { 'name': 'Arklow Loops Kynoch Walk', 'lat': 52.799941, 'lng': -6.144013 },
  { 'name': 'Avondale Forest Park - Centenary Trail', 'lat': 52.913267, 'lng': -6.2233674 },
  { 'name': 'Ballybeg loop', 'county': 'County Wexford', 'lat': 52.672069, 'lng': -6.4790826 },
  { 'name': 'Ballyhoura - Black Rock loop', 'county': 'County Limerick', 'lat': 52.31687, 'lng': -8.50286 },
  { 'name': 'Bere Island - Doonbeg loop', 'county': 'County Cork', 'lat': 51.63054, 'lng': -9.861676 },
  { 'name': 'Cailleach Beara Loop - Bonane Beara', 'county': 'County Kerry', 'lat': 51.8006767, 'lng': -9.5620704 },
  { 'name': 'Aghacashel Loop', 'lat': 54.070443, 'lng': -7.93115 },
  { 'name': 'Cloonfad River Walk', 'county': 'County Roscommon', 'lat': 53.6734976, 'lng': -8.7054237 },
]

document.getElementById("looped-walks").innerHTML = trailLocationData[0].name;
document.getElementById("abbeyleix").innerHTML = trailLocationData[1].name;
document.getElementById("arklow").innerHTML = trailLocationData[2].name;
document.getElementById("avondale").innerHTML = trailLocationData[3].name;
document.getElementById("ballybeg").innerHTML = trailLocationData[4].name;
document.getElementById("ballyhoura").innerHTML = trailLocationData[5].name;
document.getElementById("bere-island").innerHTML = trailLocationData[6].name;
document.getElementById("cailleach").innerHTML = trailLocationData[7].name;
document.getElementById("aghacashel").innerHTML = trailLocationData[8].name;
document.getElementById("cloonfad").innerHTML = trailLocationData[9].name;





