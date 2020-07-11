const months = require("./months");
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
const formattedDate = `${dd}.${mm}.${yyyy}`;
const month = months[mm - 1];
const extendedDate = `${dd} ${month} ${yyyy}`;

module.exports = { formattedDate, extendedDate };