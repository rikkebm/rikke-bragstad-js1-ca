async function callCovidApi() {
  const response = await fetch("https://covid19-data.p.rapidapi.com/geojson-na", {
    headers: {
      "x-rapidapi-host": "covid19-data.p.rapidapi.com/stupid",
      "x-rapidapi-key": "d95ff4225bmshe3a6b30a84f49b8p148377jsnb310b57be03b"
    }
  });

  const json = await response.json();
  createDetails(json);
}

callCovidApi();

function createDetails(json) {
  console.dir(json);

  for (let i = 0; i < json.features.length; i++) {
    console.dir(json.features);
  }

  const name = document.querySelector("h1");
  name.innerHTML = "Bahamas corona count";

  const infected = document.getElementById("numberOfInfected");
  infected.innerHTML = json.features[1].properties.confirmed;

  const recovered = document.getElementById("numberOfRecovered");
  recovered.innerHTML = json.features[1].properties.recovered;

  const deceased = document.getElementById("numberOfDeceased");
  deceased.innerHTML = json.features[1].properties.deaths;



}
