"use strict";

const api_key = "c8ce857c29d14585e1e58604277749d5";
// const api_key2 = "5be64ea26c114f0eb2eb360bb907eb99"

/**
 *
 * @param {string} URL  Api url
 * @param {Function} callback    callback
 */

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

// export const fetchData2 = function (URL, callback) {
//     fetch(`${URL}&apiKey=${api_key2}`)
//       .then((res) => res.json())
//       .then((data) => callback(data));

//   };

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },

  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },

  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },

  /**
   *
   * @param {string} query search query eg. Nagpur, India
   * @returns
   */

  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};

// export const url2 = {
//     reverseGeo(lat, lon) {
//         return `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&limit=5`;
//       }
// }
