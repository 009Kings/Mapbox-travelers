require('dotenv').config();

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodeingClient = mbxGeocoding({ accessToken: process.env.MAPBOX_API_KEY });

geocodeingClient.forwardGeocode({
  query: 'Seattle, WA'
}).send().then(response=>{
  // to get results
  console.log(response.body);
});