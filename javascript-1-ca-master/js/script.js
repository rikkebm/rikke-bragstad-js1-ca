async function callCovidApi() {
  const response = await fetch("https://covid19-data.p.rapidapi.com/geojson-na", {
    headers: {
      "x-rapidapi-host": "covid19-data.p.rapidapi.com",
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
    console.dir(json.features[0].properties.name);
  }

  const name = document.querySelector("h4");
  name.innerHTML = json.features[1].properties.name;

  const infecte = document.getElementById("continent");
  infecte.innerHTML = json.features[1].properties.continent;

  const infected = document.getElementById("population");
  infected.innerHTML = json.features[1].properties.pop_est;


}
