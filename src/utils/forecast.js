const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9d764cce15895f6392e9f53bc703e37c&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        "In " +
          body.location.name +
          " it is currently " +
          body.current.weather_descriptions[0] +
          " and " +
          body.current.temperature +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
