function hazardousAsteroids(startDate, endDate) {
  const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=3TRej8jogt1DfItSgkYUIjIQItpNfC34ZN3j8kgK`;

  fetch(URL)
    .then(async (response) => {
      const { near_earth_objects } = await response.json();

      const potentiallyHazardousAsteroid = {};

      Object.keys(near_earth_objects).forEach((key) => {
        near_earth_objects[key].forEach((item) => {
          if (item.is_potentially_hazardous_asteroid) {
            // If already exist
            if (!potentiallyHazardousAsteroid[item.name]) {
              potentiallyHazardousAsteroid[item.name] = 0;
            } else {
              // If astroid doesn't already exist then increment count by 1
              potentiallyHazardousAsteroid[item.name] =
                potentiallyHazardousAsteroid[item.name] + 1;
            }
          }
        });
      });

      /*
       * Checking if potential hazardous astroid is empty
       */
      if (
        Object.keys(potentiallyHazardousAsteroid).length === 0 &&
        potentiallyHazardousAsteroid.constructor === Object
      )
        return '-1';

      /*
       * TIME'S ALMOST UP :(
       * Check for the high occurance value
       */
      let highest = null;
      let anstroid = null;
      Object.keys(potentiallyHazardousAsteroid).forEach((key) => {
        if (highest == null && anstroid == null) {
          highest = potentiallyHazardousAsteroid[key];
          astroid = key;
        } else {
          if (highest < potentiallyHazardousAsteroid[key]) {
            highest = potentiallyHazardousAsteroid[key];
            astroid = key;
          }
        }
      });

      console.log(astroid);
    })
    .catch((err) => console.error(err));
}

hazardousAsteroids('2017-12-30', '2018-01-06');
