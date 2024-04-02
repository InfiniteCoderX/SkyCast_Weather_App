"use strict";

export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 *
 * @param {number} dateUnix
 * @param {number} timezone
 * @returns {string}
 */

/**
 *
 * @param {number} timestamp
 * @returns {string} formatted date
 */


export const getDate = function (dateUnix , timezone) {

const data = new Date((dateUnix + timezone) * 1000);

const weekDayName = weekDayNames[data.getUTCDay()];

const monthName = monthNames[data.getUTCMonth()];
return `${weekDayName} ${data.getUTCDate()}, ${monthName}`;
};

/**
 *
 * @param {number} timeUnix  data in sec
 * @param {number} timezone   tiemzone in sec
 * @returns {string}
 */

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const peroid = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} : ${minutes} ${peroid}`;
};

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const peroid = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${peroid}`;
};

/**
 *
 * @param {number} mps  Metter per sec
 * @returns {number}  kmph
 */

export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const apiText = {
  1: {
    level: "Good",
    message:
      "Air quality is satisfactory, and air pollution poses little or no risk.",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable. However, there may be a risk for some people, particularly if they are unusually sensitive to air pollution.",
  },
  3: {
    level: "Moderate",
    message:
      "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
  },
  4: {
    level: "Poor",
    message:
      "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warnings of emergency conditions. The entire population is more likely to be affected.",
  },
};
