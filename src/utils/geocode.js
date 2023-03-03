const request = require("request");

const geocode = (address, callback) => {
  const geo =
    "https://api.myptv.com/geocoding/v1/locations/by-address?&locality=" +
    encodeURIComponent(address) +
    "&apiKey=VVNfMGMyZmFjYzg4NjkyNDkwOTlkOTNlYTkzNTRjYmJkZjM6YWRhNmE5M2MtMWUzMC00ZTEwLTljZjctMjBlMzM1OGE5YTEy";

  request({ url: geo, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location service!", undefined);
    } else if (body.locations.length === 0) {
      callback("Unable to find location, try another place", undefined);
    } else {
      callback(undefined, {
        latitude: body.locations[0].referencePosition.latitude,
        longitude: body.locations[0].referencePosition.longitude,
        location: body.locations[0].formattedAddress,
      });
    }
  });
};

module.exports = geocode;
